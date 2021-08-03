import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";
import { Route, useParams, Link } from "react-router-dom";

const DUMMY_DATA = [
  { id: "1a", author: "Walt Disney", text: "Whatever you do, do it well" },
  { id: "2a", author: "Buddha", text: "What we think, we become" },
  {
    id: "3a",
    author: "Robert H. Schiuller",
    text: "Problems are not stop signs, they are guidelines",
  },
];

const QuoteDetails = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <div>No Such Quote</div>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path='/quotelist/:quoteId/comments'>
        <Comments />
      </Route>
      <Route path={`/quotelist/${params.quoteId}`} exact>
        <div className='centered'>
          <Link to={`${params.quoteId}/comments`} className='btn--flat'>
            Show Comments
          </Link>
        </div>
      </Route>
    </>
  );
};

export default QuoteDetails;
