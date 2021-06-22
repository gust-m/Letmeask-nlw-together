import { Link } from 'react-router-dom';

import { Container, SignIn, Logo } from './styles';

import IllustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import { Button } from '../../components/Buttons';

export const NewRoom: React.FC = () => {
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
          <form action="">
            <input type="text" placeholder="Nome da sala" />
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
