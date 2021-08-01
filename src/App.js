import { Route } from "react-router-dom";
import QuoteList from "./components/quotes/QuoteList";
import QuoteForm from "./components/quotes/QuoteForm";
import QuoteItem from "./components/quotes/QuoteItem";

function App() {
  return (
    <div>
      <Route path='/quotelist'>
        <QuoteList />
      </Route>
      <Route path='/new'>
        <QuoteForm />
      </Route>
      <Route path='/quotelist/:quoteId'>
        <QuoteItem />
      </Route>
    </div>
  );
}

export default App;