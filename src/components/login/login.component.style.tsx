import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const InputStyled = styled.input`
  height: 30px;
  width: 400px;
  border-radius: 5px;
`;

export const ButtonStyled = styled(Button)`
  background-color: rgb(93, 0, 180);
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  outline-style: none;
  width: 400px;
  color: white;
`;

export const LabelStyled = styled.label`
  font-family: Arial;
  font-weight: bold;
  display: block;
  margin-right: 365px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const FormsStyled = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  width: 60vw;
  align-items: center;
`;

export const TitleStyled = styled.h1`
  font: bold 30px arial, sans-serif;
`;
