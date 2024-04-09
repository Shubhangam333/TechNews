import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  console.log(currentPage);
  return (
    <Wrapper>
      <Link
        to={currentPage === 1 ? "/" : `/${currentPage - 1}`}
        className={`${currentPage === 1 ? "disabled" : ""}`}
      >
        <IoIosArrowBack
          className={`icon ${currentPage === 1 ? "disabled" : ""}`}
        />
      </Link>

      {pages &&
        pages.map((page, idx) => (
          <>
            <Link
              key={page}
              className={`link-number ${page === currentPage ? "active" : ""}`}
              to={`/`}
              onClick={() => setCurrentPage(page)}
            >
              <span>{page}</span>
            </Link>
          </>
        ))}

      <Link
        className={`${currentPage === pages.length ? "disabled" : ""}`}
        to={
          currentPage === pages.length
            ? `${pages.length}`
            : `/${currentPage + 1}`
        }
      >
        <IoIosArrowForward
          className={`icon ${currentPage === pages.length ? "disabled" : ""}`}
        />
      </Link>
    </Wrapper>
  );
};

export default Pagination;
