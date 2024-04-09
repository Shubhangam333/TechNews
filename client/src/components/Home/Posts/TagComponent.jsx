import { Link } from "react-router-dom";

const TagComponent = ({ publisher, category }) => {
  return (
    <div className="post-tags">
      <Link to={`/${category.name}`}>{category.name}</Link>
      <p className="publisher">{publisher.name}</p>
    </div>
  );
};

export default TagComponent;
