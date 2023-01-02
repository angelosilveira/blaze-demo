import React, { useCallback, useEffect, useState } from 'react';
import { BiPlusCircle, BiPrinter } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { Button } from '@components/Button';
import { Container } from '@components/Container';
import Input from '@components/Input';
import { Scroll } from '@components/Scroll';
import { SectionTitle } from '@components/SectionTitle';
import Select from '@components/Select';
import { UserCard } from '@components/UserCard';

import * as S from './styles';
import useFetch from 'src/hooks/useFetch';
import { Loading } from '@components/Loading';
import { User } from 'src/models/User';
import { api } from 'src/services/api';

export const Proposals = () => {
  const navigate = useNavigate();
  const { data, error, loading, setData } = useFetch('/users');
  const [search, setSearch] = useState('');
  const [filteredProposals, setFilteredProposals] = useState([]);

  const handleDeleteUser = async (id: number) => {
    swal({
      title: 'Tem certeza que deseja deletar essa proposta?',
      icon: 'warning',
      buttons: ['Cancelar', 'Deletar'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        api.delete(`/users/${id}`).then(() => {
          swal('Proposta deletada com sucesso', {
            icon: 'success',
          });
          setData(data.filter((item: User) => item.id !== id));
        });
      }
    });
  };

  useEffect(() => {
    setFilteredProposals(
      data.filter((item: User) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  const handleSortBy = useCallback(
    (e: any) => {
      const field = e.target.value;
      const newArr = [...filteredProposals].sort((a: any, b: any) =>
        a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1
      );

      setFilteredProposals(newArr);
    },
    [filteredProposals]
  );

  return (
    <>
      {loading ? (
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
      ) : (
        <Container>
          <SectionTitle title="Propostas de Venda" />

          <Select
            title="Filtrar por"
            options={[
              {
                value: 'name',
                label: 'Nome',
              },
              {
                value: 'cnpj_cpf',
                label: 'CNPJ/CPF',
              },
              {
                value: 'city',
                label: 'Cidade',
              },
            ]}
            onChange={handleSortBy}
          />

          <Input
            placeholder="Pesquisar"
            onChange={(event) => setSearch(event.target.value)}
          />
          <div
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <Scroll>
              {filteredProposals.length < 1 ? (
                <S.UsersNotFound>
                  Não existe nenhuma proposta cadastrada no momento!
                </S.UsersNotFound>
              ) : (
                <>
                  {filteredProposals.map((user: User) => (
                    <UserCard
                      key={user.id}
                      {...user}
                      onDelete={handleDeleteUser}
                    />
                  ))}
                </>
              )}
            </Scroll>

            <S.ButtonGrooups>
              <Button
                icon={<BiPlusCircle />}
                onClick={() => navigate('/new-proposal')}
              >
                Nova Proposta
              </Button>
              <Button
                icon={<BiPrinter />}
                variant="success"
                onClick={() => navigate('/reports')}
              >
                Relatório
              </Button>
            </S.ButtonGrooups>
          </div>
        </Container>
      )}
    </>
  );
};
