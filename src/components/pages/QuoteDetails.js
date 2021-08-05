import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import { useEffect } from "react";
import Comments from "../comments/Comments";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();
  const { quoteId } = params;

  const { sendRequest, data: loadedQuote, status, error } = useHttp(
    getSingleQuote
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedQuote) {
    return <div className='centered'>No Such Quote</div>;
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>

      <Route path={`${match.path}`} exact>
        <div className='centered'>
          <Link to={`${match.url}/comments`} className='btn--flat'>
            Show Comments
          </Link>
        </div>
      </Route>
    </>
  );
};

export default QuoteDetails;
