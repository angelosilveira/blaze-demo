import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { SectionTitle } from '@components/SectionTitle';

import useFetch from 'src/hooks/useFetch';
import { groupByKey } from 'src/utils/helpers';

import * as S from './styles';
import { randomBackgroundColor } from 'src/utils/constants';
import { Loading } from '@components/Loading';

const Dashboard = () => {
  const navigate = useNavigate();
  const { data, error, loading } = useFetch('/users');

  const useGroupData = useMemo(() => {
    return groupByKey(data, 'city');
  }, [data]);

  const arrBgGraphic = useMemo(() => {
    return Object.values(useGroupData).map(() => randomBackgroundColor(0.2));
  }, [useGroupData]);

  const arrBorderGraphic = useMemo(() => {
    return arrBgGraphic.map((item: string) => item.replace('0.2', '1'));
  }, [arrBgGraphic]);

  const dataPie = {
    labels: Object.keys(useGroupData),
    datasets: [
      {
        label: 'Total de propostas',
        data: Object.values(useGroupData).map((item: any) => item.length),
        backgroundColor: arrBgGraphic,
        borderColor: arrBorderGraphic,

        borderWidth: 1,
      },
    ],
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Container>
        <SectionTitle title="Relatório" />

        <S.Subtitle>Quantidade de propostas por cidade</S.Subtitle>

        <S.Content>
          <S.GraphContainer>
            <Pie data={dataPie} />
          </S.GraphContainer>
          <S.ButtonGrooups>
            <Button onClick={() => navigate('/')}>Voltar</Button>
          </S.ButtonGrooups>
        </S.Content>
      </Container>
    </>
  );
};

export default Dashboard;
