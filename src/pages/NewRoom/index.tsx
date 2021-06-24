import { useCallback, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, SignIn, Logo } from './styles';

import IllustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

export const NewRoom: React.FC = () => {
  const [newRoom, setNewRoom] = useState('');
  const { user } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (newRoom.trim() === '') {
        return;
      }

      const roomRef = database.ref('rooms');

      const firebaseRoom = await roomRef.push({
        title: newRoom,
        authorId: user?.id,
      });

      history.push(`/rooms/${firebaseRoom.key}`);
    },
    [history, newRoom, user?.id],
  );

  const handleChangeRoomName = useCallback((roomName: string) => {
    setNewRoom(roomName);
  }, []);

  return (
    <Container>
      <Logo>
        <img
          src={IllustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Logo>

      <SignIn>
        <div>
          <img src={logoImg} alt="Let Me Ask" />
          <h2>Crie uma nova sala</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => handleChangeRoomName(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente?
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </SignIn>
    </Container>
  );
};
