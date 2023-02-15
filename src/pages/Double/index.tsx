import React from 'react';

import { Controller } from '@components/Controller';
import { RouletteColumn } from '@components/RouletteColumn';
import { mockRouletteColumn } from '@components/RouletteColumn/mock';
import { Container } from '@components/Container';
import { Gamer } from '@components/Gamer';

import * as S from './styles';

export const Double = () => {
  return (
    <>
      <S.Content>
        <Container>
          <Controller />
          <Gamer />
        </Container>

        <S.RouletteGroups>
          <RouletteColumn
            title={'Win 2x'}
            image={'/images/red.svg'}
            total={2990.9}
            data={mockRouletteColumn}
          />
          <RouletteColumn
            title={'Win 14x'}
            image={'/images/white.svg'}
            total={2990.9}
            data={mockRouletteColumn}
          />
          <RouletteColumn
            title={'Win 2x'}
            image={'/images/black.svg'}
            total={2990.9}
            data={mockRouletteColumn}
          />
        </S.RouletteGroups>
      </S.Content>
    </>
  );
};
