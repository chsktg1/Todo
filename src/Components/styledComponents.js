import styled from "styled-components";
export const TodoPara = styled.p`
  text-align: center;
  padding: 8px;
  box-sizing: border-box;
  width: 380px;
  background-color: #00ff00;
  color: #0070c1;
`;

export const TodoParaHeading = styled(TodoPara)`
  border: 2px solid black;
`;

export const StatusPara = styled(TodoPara)`
  color: #660000;
  width: 140px;
  border-radius: 10px;
`;

export const StatusParaHeading = styled(StatusPara)`
  border: 2px solid black;
`;

export const DateAddPara = styled(TodoPara)`
  color: #664466;
`;

export const DateAddParaHeading = styled(DateAddPara)`
  border: 2px solid black;
`;

export const Div = styled.div`
  display: flex;
  margin-bottom: -15px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
