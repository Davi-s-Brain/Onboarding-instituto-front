import { Button } from 'react-bootstrap';
import styled from 'styled-components';

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

export const SubtitleStyled = styled.h2`
  text-align: center;
`;

export const H2Styled = styled.h2`
  text-align: center;
  width: 400px;
`;

export const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 790px;
  padding: 0px;
`;

export const DivTitleStyled = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0px 10px 0px 10px;
  width: 100%;
  justify-content: center;
`;

export const ButtonStyled = styled(Button)`
  background-color: rgb(93, 0, 180);
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px 10px 10px 10px;
  outline-style: none;
  width: 300px;
  color: white;
`;

export const CreateUserButtonStyled = styled(ButtonStyled)`
  width: 200px;
`;