import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../assets/wrappers/Profile";
import { AiOutlineMail } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { setProfileModal } from "../../features/profile/profileSlice";
import EditProfileModal from "./EditProfileModal";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { profileModal } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <section className="main">
          <div className="header-container">
            <div className="user-info">
              <h1>{user.name}</h1>
              <p>{user.role}</p>
            </div>
            <div className="contact-info">
              <button className="create-post">
                <IoCreateOutline />
              </button>
              <button>
                <CiGlobe />
              </button>
              <button>
                <AiOutlineMail />
              </button>
            </div>
          </div>
          <div className="about-info">
            <p>{user.bio}</p>
          </div>
        </section>
        <article className="aside-article">
          <div className="profile-image-container">
            <img src={user.avatar.url} alt="" />
          </div>
          <div className="followers-info">
            <p>
              Followers <span>1</span>
            </p>
            <p>
              Following <span>1</span>
            </p>
          </div>
          <button
            className="edit-profile"
            onClick={() => dispatch(setProfileModal(true))}
          >
            Edit Profile
          </button>
        </article>
      </Wrapper>
      {profileModal && <EditProfileModal />}
    </>
  );
};

export default Profile;
