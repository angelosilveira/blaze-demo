import styled from 'styled-components';
import { customMedia } from '@styles/media';

export const Content = styled.div`
  max-width: 1104px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 20px 16px;

  ${customMedia.lessThan('desktop')`
      adding: 0 20px;
    `}
`;

export const RouletteGroups = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0 30px;
`;
