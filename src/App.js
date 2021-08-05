import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./components/pages/AllQuotes";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddNewQuote = React.lazy(() => import("./components/pages/AddNewQuote"));
const QuoteDetails = React.lazy(() =>
  import("./components/pages/QuoteDetails")
);
const NotFound = React.lazy(() => import("./components/pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
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
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>{" "}
      </Suspense>
    </Layout>
  );
}

export default App;
