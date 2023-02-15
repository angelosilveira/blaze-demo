import styled, { css } from 'styled-components';

import { VariantProps } from '.';

type ButtonProps = {
  variant: VariantProps;
};

const wrapperModifiers = {
  gray: () => css`
    border: 1px solid var(--separator);
    background-color: var(--background-two);
    border-radius: 3px;
    color: var(--cloudy-blue);
    font-weight: 600;
    font-size: 12px;
    padding: 16px 30px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  `,
  red: () => css`
    background-color: var(--red);
    color: #fff;
    border-radius: 4px;
    padding: 15px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -0.3px;
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ variant }) => css`
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.5s ease all;
    width: 100%;
    font-family: 'SofiaPro', sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed !important;
    }

    ${!!variant && wrapperModifiers[variant]()}
  `}
`;
