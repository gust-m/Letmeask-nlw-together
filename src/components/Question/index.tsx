import { ReactNode } from 'react';
import { Container, UserInfo } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
};

export const Question: React.FC<QuestionProps> = ({
  author,
  content,
  children,
}: QuestionProps) => {
  console.log(children);
  return (
    <Container>
      <p>{content}</p>

      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </footer>
    </Container>
  );
};
