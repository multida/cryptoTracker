import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

function Router() {
  return (
    <BrowserRouter>
      {/* Switch: 한번에 하나의 Route를 렌더링 할 수 있는 방법 */}
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
