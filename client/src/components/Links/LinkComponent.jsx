import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/LinkComponent";

const LinkComponent = ({ tags, catname }) => {
  const lowercaseTags = tags.toLowerCase();
  const lowercaseCatname = catname.toLowerCase();
  return (
    <Wrapper>
      <Link to={`/`}>Home</Link>
      <Link to={`/${lowercaseCatname}`}>{lowercaseCatname}</Link>
      {tags && <Link to={`/${lowercaseTags}`}>{lowercaseTags}</Link>}
    </Wrapper>
  );
};

export default LinkComponent;
