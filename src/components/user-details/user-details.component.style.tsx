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

export const TitleStyled = styled.h1`
  font: bold 30px arial, sans-serif;
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 5px;
  width: 100%;
  align-items: center;
`;

export const LiStyled = styled.li`
  padding: 5px 50px 5px 50px;
  font-size: 24px;
`;

export const SectionStyled = styled.section`
  display: flex;
`;

export const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 790px;
  padding: 0px;
`;