import QuoteList from "../quotes/QuoteList";

const DUMMY_DATA = [
  { id: 1, author: "Walt Disney", text: "Whatever you do, do it well" },
  { id: 2, author: "Buddha", text: "What we think, we become" },
  {
    id: 3,
    author: "Robert H. Schiuller",
    text: "Problems are not stop signs, they are guidelines",
  },
];

const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_DATA} />
    </>
  );
};

export default AllQuotes;
