import React from 'react';

import * as S from './styles';

export type ScrollProps = {
  children: React.ReactNode;
};

export const Scroll = ({ children }: ScrollProps) => {
  return (
    <S.Wrapper data-testid="scroll">
      <S.ScrollBox>{children}</S.ScrollBox>
      <div className="cover-bar"></div>
    </S.Wrapper>
  );
};
