import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type VariantProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export type ButtonProps = {
  children: React.ReactNode;
  icon?: JSX.Element;
  variant?: VariantProps;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  icon,
  variant = 'primary',
  ...rest
}: ButtonProps) => (
  <S.Wrapper variant={variant} {...rest}>
    <>
      {!!icon && icon}
      {children}
    </>
  </S.Wrapper>
);
