import styled from 'styled-components';

export const Wrapper = styled.main`
  transition: all 1s ease;
  border-radius: 8px;
  box-shadow: 0 5px 20px 0 rgb(6 10 14 / 25%);
  background-color: var(--background-two);
  padding: 0 16px;
  margin-top: 20px;
`;

export const Header = styled.div`
  height: 80px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  border-bottom: 1px solid var(--separator);
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35px;
    height: 35px;
  }
`;

export const Body = styled.div`
  padding-bottom: 16px;
  display: block;
  width: 100%;
`;

export const Total = styled.div`
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  font-size: 12px;
  line-height: 1.33;
  color: #fff;
  padding: 0 8px;
`;

export const Counter = styled.div`
  font-size: 16px;
  line-height: normal;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Entries = styled.div``;

export const EntriesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  height: 32px;
  border-radius: 4px;
  background-color: var(--dark-background-four);
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: var(--light-grey);
  padding: 0 16px;
`;

export const Entry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--separator);

  &:last-child {
    border-bottom: none;
    margin-bottom: -16px;
  }
`;

export const Username = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--white-grey);
  text-align: left;
  padding-right: 15px;
  display: flex;
  align-items: center;

  a {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 120px;
    overflow: hidden;
  }

  a:hover {
    color: #fff;
  }
`;

export const UserRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;

  img {
    margin-right: 8px;
  }
`;

export const Amount = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  white-space: nowrap;
`;
