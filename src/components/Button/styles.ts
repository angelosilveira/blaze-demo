import styled, { css } from 'styled-components';

import { VariantProps } from '.';

type ButtonProps = {
  variant: VariantProps;
};

const wrapperModifiers = {
  primary: () => css`
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  `,
  secondary: () => css`
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  `,
  success: () => css`
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  `,
  danger: () => css`
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  `,
  warning: () => css`
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  `,
  info: () => css`
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  `,
  light: () => css`
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  `,
  dark: () => css`
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: 1.2rem;

    svg {
      font-size: 1.6rem;
      margin-right: 5px;
    }

    ${!!variant && wrapperModifiers[variant]()}
  `}
`;
