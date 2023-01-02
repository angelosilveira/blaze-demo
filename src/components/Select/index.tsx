import { forwardRef, HTMLAttributes } from 'react';
import * as S from './styles';

type OptionsProps = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: OptionsProps[];
  title: string;
  label?: string;
  error?: string;
} & HTMLAttributes<HTMLSelectElement>;

const Select = (
  { options, title, label, id, error, ...rest }: SelectProps,
  ref: any
) => (
  <S.Wrapper>
    {!!label && <label>{label}</label>}
    <select {...rest} ref={ref} data-testid={id}>
      <option value="" disabled selected>
        {title}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {!!error && <S.Error>{error}</S.Error>}
  </S.Wrapper>
);

export default forwardRef(Select);
