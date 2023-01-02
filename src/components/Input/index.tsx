import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './styles';

export type InputProps = {
  title?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ title, error, name, id, ...rest }: InputProps, ref: any) => (
  <S.Wrapper>
    {!!title && <label htmlFor={name}>{title}</label>}
    <input {...rest} ref={ref} {...(title ? { id: name } : {})} />
    {!!error && <S.Error>{error}</S.Error>}
  </S.Wrapper>
);

export default forwardRef(Input);
