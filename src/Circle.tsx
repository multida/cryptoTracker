import styled from "styled-components";
import { useState } from "react";
interface ContainerProps {
  bgColor: string;
  borderColor: string; //스타일쪽은 required로 해줌
}
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor: string; //필수값으로 넣어줘야함
  borderColor?: string; //optional (넣어줘도 되고 안넣어줘도 되고) borderColor: string | undefined 라고 써줄 수도 있음
  text?: string;
}
function Circle({ bgColor, borderColor, text = "Default text" }: CircleProps) {
  //text가 존재하지 않으면 Default text이게 나옴
  const [counter, setCounter] = useState(0);
  //useState<number | string>(1);는 number 또는 string 타입이 되길 원한다면!
  setCounter(1);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
  //borderColor ?? : borderColor가 undefined상태라면?없다면? (??은 폴백이라고 함)
}

export default Circle;
