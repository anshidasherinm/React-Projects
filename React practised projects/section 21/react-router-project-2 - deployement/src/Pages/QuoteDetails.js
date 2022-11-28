import React, { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighLightedQuote from "../components/quotes/HighlightedQuote";
import { getSingleQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Anshida", text: "Learning React is great!" },
];

const QouteDetails = () => {
  const params = useParams();
  const { quoteId } = params;
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  console.log(match); //{path: '/quotes/:quoteId', url: '/quotes/q2', isExact: false, params: {…}}
  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }

  // if (!quote) {
  //   return <p>No quote found!</p>;
  // }

  return (
    //dynamically making the url
    <React.Fragment>
      <h1>Quote Deatils page</h1>
      <HighLightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      {/* <p className="centered">{quoteId}</p> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
    // <React.Fragment>
    //   <h1>Quote Deatils page</h1>
    //   <HighLightedQuote text={quote.text} author={quote.author} />
    //   <Route path={`/quotes/${params.quoteId}`} exact>
    //     <div className="centered">
    //       <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
    //         Load Comments
    //       </Link>
    //     </div>
    //   </Route>

    //   <p className="centered">{params.quoteId}</p>
    //   <Route path={`/quotes/${params.quoteId}/comments`}>
    //     <Comments />
    //   </Route>
    // </React.Fragment>
  );
};

export default QouteDetails;
