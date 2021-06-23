import { useState, useCallback, FormEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  HeaderContent,
  Content,
  FormFooter,
  UserInfo,
} from './styles';

import { Button } from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

type RoomParams = {
  id: string;
};

interface QuestionProps {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isHighlighted: boolean;
  isAnswered: boolean;
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
  }
>;

export const Room: React.FC = () => {
  const params = useParams<RoomParams>();
  const { user } = useAuth();

  const [newQuestion, setNewQuestion] = useState('');
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<QuestionProps[]>([]);

  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.once('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FireBaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          const { author, content, isAnswered, isHighlighted } = value;

          return {
            id: key,
            content,
            author,
            isAnswered,
            isHighlighted,
          };
        },
      );
      setQuestions(parsedQuestions);
      setTitle(databaseRoom.title);
    });
  }, [roomId]);

  const handleSendQuestion = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      if (newQuestion.trim() === '') {
        return;
      }

      if (!user) {
        throw new Error('You must be logged in');
      }

      const question: Omit<QuestionProps, 'id'> = {
        content: newQuestion,
        author: {
          name: user.name,
          avatar: user.avatar,
        },
        isAnswered: false,
        isHighlighted: false,
      };

      await database.ref(`rooms/${roomId}/questions`).push(question);

      setNewQuestion('');
    },
    [newQuestion, roomId, user],
  );

  return (
    <Container>
      <header>
        <HeaderContent>
          <img src={logoImg} alt="Let me ask" />
          <RoomCode code={roomId} />
        </HeaderContent>
      </header>

      <Content>
        <div>
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}
              {questions.length > 1 ? ' perguntas' : ' pergunta'}
            </span>
          )}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion ?? ''}
          />

          <FormFooter>
            {user ? (
              <UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta,
                <button type="button">faça seu login.</button>
              </span>
            )}
            <Button disabled={!user}>Enviar pergunta</Button>
          </FormFooter>
        </form>
      </Content>
    </Container>
  );
};
