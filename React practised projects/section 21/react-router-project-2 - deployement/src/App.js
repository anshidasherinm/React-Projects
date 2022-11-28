import React, { Suspense } from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AllQuotes from "./Pages/AllQuotes";
//we need to make this newQoute page pnly render wehn user need or click it so for that
// import NewQuote from "./Pages/NewQuote";
// import NotFound from "./Pages/NotFound";
// import QouteDetails from "./Pages/QuoteDetails";

const NewQuote = React.lazy(() => import("./Pages/NewQuote"));
const QuoteDetails = React.lazy(() => import("./Pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact>
              {/* exact is given to make allqoutes donot come when qoute details are called */}
              <AllQuotes />
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetails />
            </Route>
            <Route path="/new-quote">
              <NewQuote />
            </Route>
            {/* the below route must only come last because , there is a star which  means any */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
