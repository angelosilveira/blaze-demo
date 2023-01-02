import * as S from './styles';

export type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => (
  <S.Wrapper>
    <h2>{title}</h2>
  </S.Wrapper>
);
