import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/* <Switch> */}
        <Routes>
          {/* <Route path="/welcome">
            <Welcome />
          </Route> */}
          {/* //exact now does not need to be given implicitly */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />

          {/* <Route path="/products" exact>
            <Products />
          </Route> */}
          {/* <Route path="/products/:productId">
            <ProductDetail />
          </Route> */}
          {/* </Switch> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
