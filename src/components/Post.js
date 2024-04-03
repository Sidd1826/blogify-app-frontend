import { Link } from "react-router-dom";
import {format} from 'date-fns';

export default function Post({_id, title, summary, cover, createdAt, author}) {
  return (
    <div className="post">
      <Link to={`/post/${_id}`}>
        <img alt="umg" src={"http://localhost:4000/" + cover} />
      </Link>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <Link className="author">{author.username}</Link>
          <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
        </p>
        <p className="summary">
          {summary}
        </p>
      </div>
    </div>
  );
}
