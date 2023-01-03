import React, { useCallback, useState } from 'react';
import axios from 'axios';

import { BiUndo, BiSave } from 'react-icons/bi';
import { Container } from '@components/Container';
import { SectionTitle } from '@components/SectionTitle';
import Input from '@components/Input';
import { Button } from '@components/Button';

import * as S from './styles';
import { Scroll } from '@components/Scroll';
import Select from '@components/Select';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { STATES } from 'src/utils/constants';
import { toast } from 'react-toastify';
import { api } from 'src/services/api';

const schema = yup.object({
  date_proposal: yup.string().required('Campo Data da proposta é obrigatório'),
  cnpj_cpf: yup.string().required('Campo CNPJ/CPF é obrigatório'),
  name: yup.string().required('Campo Nome do Títular é obrigatório'),
  marital: yup.string().required('Campo Estado Cívil é obrigatório'),
  state: yup.string().required('Campo Estado é obrigatório'),
  city: yup.string().required('Campo Cidade é obrigatório'),
  neighborhood: yup.string().required('Campo Bairro é obrigatório'),
  address: yup.string().required('Campo Endereço é obrigatório'),
});

type FormData = {
  date_proposal: string;
  cnpj_cpf: string;
  name: string;
  marital: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  rg?: string;
  phone?: string;
  cel?: string;
  sex?: string;
  email?: string;
  zipcode?: string;
  complement?: string;
  number?: string;
  date_birth?: string;
};

export const CreateProposal = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleSelectState = useCallback(async (event: any) => {
    const response = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event?.target.value}/distritos`
    );

    const arrCities = response.data.map((item: any) => ({
      value: item.nome,
      label: item.nome,
    }));

    setCities(arrCities);
  }, []);

  const sendProposal = handleSubmit(async (data) => {
    try {
      await api.post('/users', data);
      toast.success('Sua proposta foi cadastrada com sucesso!');
    } catch (err) {
      toast.error(
        'Erro ao tentar cadastrar a proposta, por favor verifique os dados'
      );
    }
  });

  return (
    <>
      <Container>
        <SectionTitle title="Proposta de Venda" />

        <S.Form onSubmit={sendProposal}>
          <section>
            <Scroll>
              <div className="input-date">
                <label>Data da proposta*</label>
                <input type="date" {...register('date_proposal')} />
                {!!errors.date_proposal && (
                  <S.ErrorMessage>
                    {errors.date_proposal?.message}
                  </S.ErrorMessage>
                )}
              </div>

              <Input
                title="CNPJ/CPF*"
                placeholder="CNPJ/CPF*"
                {...register('cnpj_cpf')}
                error={errors.cnpj_cpf?.message}
              />
              <Input
                title="Nome do Titular*"
                placeholder="Nome do Titular*"
                error={errors.name?.message}
                {...register('name')}
              />
              <Input title="IE/RG" placeholder="IE/RG" {...register('rg')} />
              <Select
                error={errors.marital?.message}
                {...register('marital')}
                label="Estado Cívil*"
                title="Selecione o estado cívil"
                id="marital"
                options={[
                  {
                    value: 'solteiro',
                    label: 'Solteiro(a)',
                  },
                  {
                    value: 'casado',
                    label: 'Casado(a)',
                  },
                  {
                    value: 'divorciado',
                    label: 'Divorciado(a)',
                  },
                  {
                    value: 'viuvo',
                    label: 'Viúvo(a)',
                  },
                ]}
              />
              <Input
                title="Telefone"
                placeholder="Telefone"
                {...register('phone')}
              />

              <div className="input-date">
                <label>Data de nascimento</label>
                <input type="date" {...register('date_birth')} />
              </div>

              <Input
                title="Celular"
                placeholder="Celular"
                {...register('cel')}
              />
              <Select
                {...register('sex')}
                label="Sexo"
                title="Selecione o sexo"
                options={[
                  {
                    value: 'masculino',
                    label: 'Masculino',
                  },
                  {
                    value: 'feminino',
                    label: 'Feminino',
                  },
                  {
                    value: 'outro',
                    label: 'Outro',
                  },
                ]}
              />
              <Input
                title="E-mail"
                type="email"
                placeholder="E-mail"
                {...register('email')}
              />

              <Select
                title="Selecione um estado"
                label="Estado*"
                options={STATES}
                {...register('state')}
                onChange={handleSelectState}
                error={errors.state?.message}
              />
              <Select
                title="Selecione uma cidade"
                label="Cidade*"
                options={cities}
                {...register('city')}
                error={errors.city?.message}
              />

              <Input
                title="Bairro*"
                placeholder="Bairro*"
                {...register('neighborhood')}
                error={errors.neighborhood?.message}
              />
              <Input
                title="Endereço*"
                placeholder="Endereço*"
                {...register('address')}
                error={errors.address?.message}
              />
              <Input
                title="Número"
                placeholder="Número"
                {...register('number')}
              />
              <Input title="CEP" placeholder="CEP" {...register('zipcode')} />
              <Input
                title="Complemento"
                placeholder="Complemento"
                {...register('complement')}
              />
            </Scroll>
          </section>

          <footer>
            <Button icon={<BiSave />} type="submit">
              Salvar
            </Button>
            <Button
              icon={<BiUndo />}
              onClick={() => navigate('/')}
              variant="warning"
            >
              Voltar
            </Button>
          </footer>
        </S.Form>
      </Container>
    </>
  );
};
