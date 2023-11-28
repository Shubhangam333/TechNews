import Wrapper from "../../assets/wrappers/MegaNav";
import { IoIosArrowForward } from "react-icons/io";
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
              <button onClick={() => setMenuId(true)}>
                Computing <IoIosArrowForward className="arrow-icon" />
              </button>
              <MegaNavMenu MenuId={MenuId} />
            </li>
            <li className="listItem">
              <button onClick={() => setMenuId(true)}>
                Mobile <IoIosArrowForward className="arrow-icon" />
              </button>
              {/* <MegaNavMenu MenuId={MenuId} /> */}
            </li>
            <li className="listItem">
              <button>
                Gaming <IoIosArrowForward className="arrow-icon" />
              </button>
            </li>
            <li className="listItem">
              <button>
                Entertainment <IoIosArrowForward className="arrow-icon" />
              </button>
              {/* <MegaNavMenu /> */}
            </li>
            <li className="listItem">
              <button>
                Audio/Video <IoIosArrowForward className="arrow-icon" />
              </button>
              {/* <MegaNavMenu /> */}
            </li>
            <li className="listItem">
              <button>
                SmartHome <IoIosArrowForward className="arrow-icon" />
              </button>
              {/* <MegaNavMenu /> */}
            </li>
          </ul>
        </Wrapper>
      )}
    </>
  );
};

export default MegaNav;
