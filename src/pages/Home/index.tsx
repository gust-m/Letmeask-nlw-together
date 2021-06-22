import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Container, SignIn, Logo } from './styles';

import IllustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';
import { Button } from '../../components/Buttons';

export const Home: React.FC = () => {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  };

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
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na Sala</Button>
          </form>
        </div>
      </SignIn>
    </Container>
  );
};
