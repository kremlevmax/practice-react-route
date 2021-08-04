import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const AddNewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  const onAddQuote = (quote) => {
    sendRequest(quote);
  };

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotelist");
    }
  }, [status, history]);
  return (
    <>
      <QuoteForm onAddQuote={onAddQuote} />
    </>
  );
};

export default AddNewQuote;
