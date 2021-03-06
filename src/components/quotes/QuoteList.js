import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAsc = queryParams.get("sort") === "asc";

  const quotesArray = sortQuotes(props.quotes, isSortingAsc);

  const clickSortingButtonHandler = () => {
    history.push({
      location: location.pathname,
      search: `sort=${isSortingAsc ? "dsc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={clickSortingButtonHandler}>
          Sort {isSortingAsc ? "asc" : "dsc"}
        </button>
      </div>
      <ul className={classes.list}>
        {quotesArray.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
