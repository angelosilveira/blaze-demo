import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 150px);

  .input-date {
    margin-bottom: 1rem;

    label {
      display: inline-block;
    }

    input {
      display: block;
      height: 38px;
      width: 100%;
      padding: 1rem 0.75rem;
    }
  }

  footer {
    button + button {
      margin-top: 10px;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #f00;
  font-weight: bold;
  margin-top: 0.25rem;
  font-size: 1.2rem;
`;
