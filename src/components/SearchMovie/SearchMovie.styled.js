import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const Form = styled.form`
  position: relative;
`;
export const Input = styled.input`
  position: relative;
  width: 250px;
  border: 1px solid #909090;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  color: #242424;
  padding: 10px 30px;
  padding-right: 80px;
  transition: box-shadow 250ms ease-in-out, border-color 250ms ease-in-out;
  &:focus-within {
    box-shadow: 0px 0px 5px green;
     border-color: green;
  }
  `;
  