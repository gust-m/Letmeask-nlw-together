import { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {
  Container,
  HeaderContent,
  BoxTitle,
  Content,
  QuestionList,
  DeleteButton,
} from './styles';

import { useRoom } from '../../hooks/useRoom';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';

import logoImg from '../../assets/logo.svg';
import deleteImg from '../../assets/delete.svg';
import { database } from '../../services/firebase';

type RoomParams = {
  id: string;
};

export const AdminRoom: React.FC = () => {
  const params = useParams<RoomParams>();

  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

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

  const handleEndRoom = useCallback(async () => {
    if (window.confirm('Tem certeza que você deseja encerrar a sala?')) {
      await database.ref(`rooms/${roomId}`).update({
        endedAt: new Date(),
      });
    }
    history.push('/');
  }, [history, roomId]);

  return (
    <Container>
      <header>
        <HeaderContent>
          <img src={logoImg} alt="Let me ask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
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
            >
              <DeleteButton
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="" />
              </DeleteButton>
            </Question>
          ))}
        </QuestionList>
      </Content>
    </Container>
  );
};
