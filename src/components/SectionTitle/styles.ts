import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    padding-top: 1rem;

    h2 {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.black};
      margin-bottom: 0;
    }
  `}
`;
