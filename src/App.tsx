import styled from "styled-components";

const Container = styled.div`
  background-color: ${(proprs) => proprs.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
function App() {
  return (
    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;
