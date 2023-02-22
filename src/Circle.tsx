import styled from "styled-components";
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
  borderColor?: string; //oprional (넣어줘도 되고 안넣어줘도 되고) borderColor: string | undefined 라고 써줄 수도 있음
}
function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
  //borderColor ?? : borderColor가 undefined상태라면?없다면? (??은 폴백이라고 함)
}

export default Circle;
