import QuoteList from "../quotes/QuoteList";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import { useEffect } from "react";
import NoQuotesFound from "../quotes/NoQuotesFound";

const AllQuotes = () => {
  const { sendRequest, data: loadedQuotes, status, error } = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return (
      <div className='centered focused'>
        <NoQuotesFound />
      </div>
    );
  }

  return (
    <>
      <QuoteList quotes={loadedQuotes} />
    </>
  );
};

export default AllQuotes;
