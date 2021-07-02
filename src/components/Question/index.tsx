import { ReactNode } from 'react';
import { Container, UserInfo } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
};

export const Question: React.FC<QuestionProps> = ({
  author,
  content,
  isHighlighted = false,
  isAnswered = false,
  children,
}: QuestionProps) => {
  return (
    <Container answered={isAnswered} highlighted={isHighlighted && !isAnswered}>
      <p>{content}</p>

      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div className="icons">{children}</div>
      </footer>
    </Container>
  );
};
