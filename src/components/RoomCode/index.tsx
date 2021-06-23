import { useCallback } from 'react';

import { ContainerButton } from './styles';

import copyImg from '../../assets/copy.svg';

type RoomCodeProps = {
  code: string;
};

export const RoomCode: React.FC<RoomCodeProps> = ({ code }: RoomCodeProps) => {
  const copyRoomCodeToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);
  return (
    <ContainerButton onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala #{code}</span>
    </ContainerButton>
  );
};
