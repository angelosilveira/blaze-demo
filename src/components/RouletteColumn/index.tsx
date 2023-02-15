import { Link } from 'react-router-dom';
import { formatCurrencyBRL } from '../../utils/helpers';
import * as S from './styles';

type UserProps = {
  id: number;
  user: string;
  amount: number;
};

export type RouletteColumnProps = {
  title: string;
  image: string;
  total: number;
  data: UserProps[];
};

export const RouletteColumn = ({
  title,
  image,
  total,
  data,
}: RouletteColumnProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <span>{title}</span>
        <S.Image>
          <img src={image} alt="" />
        </S.Image>
      </S.Header>

      <S.Body>
        <S.Total>
          <div>Total Bets</div>
          <S.Counter>
            <span>{formatCurrencyBRL(total)}</span>
          </S.Counter>
        </S.Total>

        <S.Entries>
          <S.EntriesHeader>
            <div>User</div>
            <div>Amount</div>
          </S.EntriesHeader>

          {data.map((d) => (
            <S.Entry key={d.id}>
              <S.Username>
                <S.UserRank>
                  <img alt="rank" src="/images/platinum.svg" />
                </S.UserRank>
                <Link to="#">{d.user}</Link>
              </S.Username>
              <S.Amount>{formatCurrencyBRL(d.amount)}</S.Amount>
            </S.Entry>
          ))}

          <S.Entry>
            <S.Username>+ {data.length * 10} players</S.Username>
            <S.Amount>
              {formatCurrencyBRL(data.reduce((a, b) => a + b.amount, 0))}
            </S.Amount>
          </S.Entry>
        </S.Entries>
      </S.Body>
    </S.Wrapper>
  );
};
