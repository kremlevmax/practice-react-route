import classes from "./QuoteItem.module.css";
import { useParams, Route } from "react-router-dom";
import Comments from "../comments/Comments";
import { Fragment } from "react";

const QuoteItem = (props) => {
  const params = useParams();
  console.log(params.quoteId);
  return (
    <Fragment>
      <Route path='/quotelist/quoteId/comments'>
        <Comments />
      </Route>

      <li className={classes.item}>
        <figure>
          <blockquote>
            <p>{props.text}</p>
          </blockquote>
          <figcaption>{props.author}</figcaption>
        </figure>
        <a className='btn'>View Fullscreen</a>
      </li>
    </Fragment>
  );
};

export default QuoteItem;
