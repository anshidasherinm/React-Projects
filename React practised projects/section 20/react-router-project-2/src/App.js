import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuote";
import NotFound from "./Pages/NotFound";
import QouteDetails from "./Pages/QuoteDetails";
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            {/* exact is given to make allqoutes donot come when qoute details are called */}
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QouteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          {/* the below route must only come last because , there is a star which  means any */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
