import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";
import { useHistory } from "react-router-dom";

const AddNewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);

  const onAddQuote = (quote) => {
    sendRequest(quote);
  };

  return (
    <>
      <QuoteForm onAddQuote={onAddQuote} />
    </>
  );
};

export default AddNewQuote;
