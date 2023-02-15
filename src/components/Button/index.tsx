import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type VariantProps = 'gray' | 'red';

export type ButtonProps = {
  children: React.ReactNode;
  icon?: JSX.Element;
  variant?: VariantProps;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  icon,
  variant = 'gray',
  ...rest
}: ButtonProps) => (
  <S.Wrapper variant={variant} {...rest}>
    <>
      {!!icon && icon}
      {children}
    </>
  </S.Wrapper>
);
