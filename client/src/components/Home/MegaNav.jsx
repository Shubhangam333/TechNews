import Wrapper from "../../assets/wrappers/MegaNav";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import MegaNavMenu from "./MegaNavMenu";
import { useState } from "react";
import { useSelector } from "react-redux";

const MegaNav = () => {
  const [MenuId, setMenuId] = useState(false);
  const { megaMenuActive } = useSelector((state) => state.navbar);
  return (
    <>
      {megaMenuActive && (
        <Wrapper>
          <ul className="megaList">
            <li className="listItem">
              <button onClick={() => setMenuId(!MenuId)} className="arrow-icon">
                Computing <IoIosArrowForward className="icon" />
              </button>
              <button
                onClick={() => setMenuId(!MenuId)}
                className="down-arrow-icon"
              >
                Computing
                <IoIosArrowDown className="icon" />
              </button>
              <MegaNavMenu MenuId={MenuId} />
            </li>
            <li className="listItem">
              <button onClick={() => setMenuId(!MenuId)} className="arrow-icon">
                Mobile <IoIosArrowForward className="icon" />
              </button>
              <button
                onClick={() => setMenuId(!MenuId)}
                className="down-arrow-icon"
              >
                Mobile
                <IoIosArrowDown className="icon" />
                {/* <MegaNavMenu MenuId={MenuId} /> */}
              </button>
            </li>
          </ul>
        </Wrapper>
      )}
    </>
  );
};

export default MegaNav;
