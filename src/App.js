import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddNewQuote from "./components/pages/AddNewQuote";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetails from "./components/pages/QuoteDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotelist' />
        </Route>
        <Route path='/quotelist' exact>
          <AllQuotes />
        </Route>
        <Route path='/new'>
          <AddNewQuote />
        </Route>
        <Route path='/quotelist/:quoteId'>
          <QuoteDetails />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
