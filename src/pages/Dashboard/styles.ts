import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const GraphContainer = styled.div``;

export const ButtonGrooups = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;

  button {
    margin-top: 0.5rem;

    &:first-child {
      margin: 0;
    }
  }
`;

export const Subtitle = styled.div`
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
`;
