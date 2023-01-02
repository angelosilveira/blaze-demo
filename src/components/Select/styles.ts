import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 1rem;

  select {
    display: block;
    width: 100%;
    padding: 1rem 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

export const Error = styled.div`
  color: #f00;
  font-weight: bold;
  margin-top: 0.25rem;
  font-size: 1.2rem;
`;
