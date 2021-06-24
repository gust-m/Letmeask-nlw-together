import { useEffect, useState } from 'react';

import { database } from '../services/firebase';
import { useAuth } from './useAuth';

interface QuestionProps {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isHighlighted: boolean;
  isAnswered: boolean;
  likeCount: number;
  likeId: string | undefined;
}

type FireBaseQuestions = Record<
  string,
  {
    content: string;
    author: {
      name: string;
      avatar: string;
    };
    isHighlighted: boolean;
    isAnswered: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

type UseRoomReturn = {
  questions: QuestionProps[];
  title: string;
};

export const useRoom = (roomId: string): UseRoomReturn => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<QuestionProps[]>([]);

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FireBaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          const { author, content, isAnswered, isHighlighted, likes } = value;

          return {
            id: key,
            content,
            author,
            isAnswered,
            isHighlighted,
            likeCount: Object.values(likes ?? {}).length,
            likeId: Object.entries(likes ?? {}).find(
              ([fragment, like]) => like.authorId === user?.id,
            )?.[0],
          };
        },
      );
      setQuestions(parsedQuestions);
      setTitle(databaseRoom.title);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id]);

  return { questions, title };
};
