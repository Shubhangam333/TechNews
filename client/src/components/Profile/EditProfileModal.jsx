import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/EditProfileModal";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileModal } from "../../features/profile/profileSlice";
import { useUpdateProfileMutation } from "../../features/profile/profileapi";
import Loader from "../Loader/Loader";

const EditProfileModal = () => {
  const { user } = useSelector((state) => state.auth);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setImage(selectedFile);

      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("bio", bio);
    if (image) {
      formData.append("avatar", image);
    }

    try {
      const res = await updateProfile({ formData, id: user._id }).unwrap();
      console.log("res", res);

      if (res) {
        setName("");
        setEmail("");
        setBio("");
        setImage("");
        setImagePreview("");
        dispatch(setProfileModal(false));
        toast.success("Profile Updated Successsfully");
      }
    } catch (error) {
      toast.error(error.data.msg);
      console.log(error);
    }
  };

  const postmodalRef = useRef(null);
  const dispatch = useDispatch();

  const handleCloseModal = useCallback(
    (e) => {
      if (postmodalRef.current && !postmodalRef.current.contains(e.target)) {
        dispatch(setProfileModal(false));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [postmodalRef, dispatch, handleCloseModal]);

  return (
    <div className="modal-overlay">
      {isLoading && <Loader />}
      <Wrapper>
        <div className="auth-container" ref={postmodalRef}>
          <h1>Edit Profile</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="uname">Name: </label>
              <input
                type="text"
                name="uname"
                id="uname"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="bio">Bio</label>
              <textarea
                cols={3}
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="avatar">Avatar</label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="image/*"
                onChange={handleImage}
              />
            </div>
            <div className="submit-btn-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};

export default EditProfileModal;
