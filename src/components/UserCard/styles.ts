import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e9e9e9;

  &:first-child {
    border-top: 0;
  }

  display: flex;
  align-items: center;

  svg {
    font-size: 2.8rem;
    flex-basis: 50px;
    margin-right: 10px;
  }
`;

export const Infos = styled.div`
  width: 100%;
  font-size: 1.4rem;
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-transform: uppercase;
  `}
`;
export const CnpjCpf = styled.span`
  color: #ccc;
  display: block;
`;
export const City = styled.span`
  color: #ccc;
  display: block;
  text-transform: uppercase;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  button {
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  svg {
    font-size: 2rem;
    margin: 0;
  }
`;
