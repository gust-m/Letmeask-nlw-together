import { useHistory } from 'react-router-dom';

import { FormEvent, useCallback, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { Container, SignIn, Logo } from './styles';

import IllustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';
import { Button } from '../../components/Button';
import { database } from '../../services/firebase';

export const Home: React.FC = () => {
  const [roomCode, setRoomCode] = useState('');
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = useCallback(async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }, [history, signInWithGoogle, user]);

  const handleChangeRoomCode = useCallback((codeRoom: string) => {
    setRoomCode(codeRoom);
  }, []);

  const handleJoinRoom = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (roomCode.trim() === '') {
        return;
      }

      const roomRef = await database.ref(`rooms/${roomCode}`).get();

      if (!roomRef.exists()) {
        alert('Room does not exists.');
        return;
      }

      history.push(`/rooms/${roomCode}`);
    },
    [roomCode, history],
  );

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
          <button type="button" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <span>Entre em uma sala</span>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => handleChangeRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na Sala</Button>
          </form>
        </div>
      </SignIn>
    </Container>
  );
};
