import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          {/* <Route path="/products">
            <Products />
          </Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
