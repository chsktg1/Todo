import LoginBG from "../assets/bg-01.jpg";
import styled from "styled-components";
export const TodoPara = styled.p`
  text-align: center;
  padding: 8px;
  box-sizing: border-box;
  width: 380px;
  background-color: #8aaae5;
  color: white;
  margin-right: 5px;
  margin-left: 5px;
`;

export const TodoParaHeading = styled(TodoPara)`
  border: 2px solid black;
  font-weight: bold;
  color: white;
`;

export const StatusPara = styled(TodoPara)`
  width: 140px;
  border-radius: 10px;
`;

export const StatusParaHeading = styled(StatusPara)`
  border: 2px solid black;
  color: white;
  font-weight: bold;
  width: 200px;
`;

export const DateAddPara = styled(TodoPara)`
  display: flex;
  justify-content: space-between;
`;

export const DateAddParaHeading = styled(DateAddPara)`
  color: white;
  border: 2px solid black;
  font-weight: bold;
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
export const LoginDiv = styled.div`
  background-image: url(${LoginBG});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpDiv = styled(LoginDiv)`
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  height: 100vh;
`;

export const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-around;
`;
