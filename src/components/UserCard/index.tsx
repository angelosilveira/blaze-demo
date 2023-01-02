import { BiUserCheck, BiPencil, BiTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export type UserCardProps = {
  id: number;
  name: string;
  cnpj_cpf: string;
  city: string;
  state: string;
  onDelete?: (id: number) => void;
};

export const UserCard = ({
  id,
  name,
  city,
  cnpj_cpf,
  state,
  onDelete,
}: UserCardProps) => {
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    !!onDelete && onDelete(id);
  };

  return (
    <S.Wrapper>
      <BiUserCheck />
      <S.Infos>
        <S.Name>{name}</S.Name>
        <S.CnpjCpf>{cnpj_cpf}</S.CnpjCpf>
        <S.City>
          {city} - {state}
        </S.City>
      </S.Infos>
      <S.Actions>
        <button type="button" onClick={() => navigate(`/proposal/${id}`)}>
          <BiPencil />
        </button>
        <button type="button" onClick={() => handleDelete(id)}>
          <BiTrash />
        </button>
      </S.Actions>
    </S.Wrapper>
  );
};
