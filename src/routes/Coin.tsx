import { useParams } from "react-router-dom";

interface RouterParams {
  coinId: string;
}

function Coin() {
  // useParams: coinId를 포함하는 오브젝트를 반환해줌
  const { coinId } = useParams<RouterParams>();
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
