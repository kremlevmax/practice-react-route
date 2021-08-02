import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const QuoteItem = (props) => {
  const id = props.id;
  return (
    <Fragment>
      <li className={classes.item}>
        <figure>
          <blockquote>
            <p>{props.text}</p>
          </blockquote>
          <figcaption>{props.author}</figcaption>
        </figure>
        <Link to={`/quotelist/${id}`} className='btn'>
          View Fullscreen
        </Link>
      </li>
    </Fragment>
  );
};

export default QuoteItem;
