import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    border-radius: 100px;
    }
    100% {
      transform: rotate(360deg);
    border-radius: 0;
    }
`;

const Emoji = styled.span`
  font-size: 36px;

  &:active {
    opacity: 0;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: paleturquoise;
  animation: ${rotateAnimation} 1s linear infinite;

  ${Emoji} {
    &:hover{
      font-size: 60px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😎✅</Emoji>
      </Box>
      <Emoji>🙈</Emoji>
    </Wrapper>
  );
}

export default App;
