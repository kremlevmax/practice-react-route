import QuoteForm from "../quotes/QuoteForm";

const AddNewQuote = () => {
  const onAddQuote = (quote) => {
    console.log(quote);
  };

  return (
    <>
      <QuoteForm onAddQuote={onAddQuote} />
    </>
  );
};

export default AddNewQuote;
