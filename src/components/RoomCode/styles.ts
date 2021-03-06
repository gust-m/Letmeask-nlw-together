import styled from 'styled-components';

export const ContainerButton = styled.button`
  display: flex;

  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: #fff;
  border: 1px solid #835afd;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    background: #835afd;
    padding: 0 12px;
    max-width: 44px;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 250px;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
