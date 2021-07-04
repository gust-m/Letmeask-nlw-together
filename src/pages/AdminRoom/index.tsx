import { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { FaPowerOff } from 'react-icons/fa';

import {
  Container,
  HeaderContent,
  BoxTitle,
  Content,
  QuestionList,
  IconButton,
} from './styles';

import { useRoom } from '../../hooks/useRoom';

import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';

import logoImg from '../../assets/logo.svg';

import deleteImg from '../../assets/delete.svg';
import checkImg from '../../assets/check.svg';

type RoomParams = {
  id: string;
};

export const AdminRoom: React.FC = () => {
  const params = useParams<RoomParams>();

  const roomId = params.id;
  const { questions, title, handleHighlightQuestion } = useRoom(roomId);

  const [windowSize, setWindowSize] = useState(0);
  // const [isAnswered, setIsAnswered] = useState(false);

  window.addEventListener('resize', () => setWindowSize(window.innerWidth));

  const history = useHistory();

  const handleDeleteQuestion = useCallback(
    async (questionId: string) => {
      if (
        window.confirm('Tem certeza que você deseja excluir esta pergunta?')
      ) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
      }
    },
    [roomId],
  );

  const handleCheckQuestionAsAnswered = useCallback(
    async (questionId: string, isAnswered: boolean) => {
      // setIsAnswered(!isAnswered);
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: !isAnswered,
      });
    },
    [roomId],
  );

  const handleEndRoom = useCallback(async () => {
    if (window.confirm('Tem certeza que você deseja encerrar a sala?')) {
      await database.ref(`rooms/${roomId}`).update({
        endedAt: new Date(),
      });
      history.push('/');
    }
  }, [history, roomId]);

  return (
    <Container>
      <header>
        <HeaderContent>
          <img src={logoImg} alt="Let me ask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              {windowSize > 479 && 'Encerrar sala'}
              {windowSize < 480 && windowSize > 379 && 'Encerrar'}
              {windowSize < 380 && <FaPowerOff size={20} />}
            </Button>
          </div>
        </HeaderContent>
      </header>

      <Content>
        <BoxTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}
              {questions.length > 1 ? ' perguntas' : ' pergunta'}
            </span>
          )}
        </BoxTitle>

        <QuestionList>
          {questions.map(question => (
            <Question
              author={question.author}
              content={question.content}
              key={question.id}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              {!question.isAnswered && (
                <>
                  <IconButton
                    type="button"
                    onClick={() =>
                      handleCheckQuestionAsAnswered(
                        question.id,
                        question.isAnswered,
                      )
                    }
                  >
                    <img src={checkImg} alt="Marcar pergunta como concluída" />
                  </IconButton>
                  <IconButton
                    type="button"
                    onClick={() =>
                      handleHighlightQuestion(
                        question.id,
                        question.isHighlighted,
                      )
                    }
                    highlighted={question.isHighlighted}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z"
                        stroke="#737380"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </IconButton>
                </>
              )}
              <IconButton
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </IconButton>
            </Question>
          ))}
        </QuestionList>
      </Content>
    </Container>
  );
};
