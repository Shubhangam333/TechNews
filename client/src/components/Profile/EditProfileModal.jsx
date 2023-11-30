import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/EditProfileModal";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setProfileModal } from "../../features/profile/profileSlice";

const EditProfileModal = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    console.log("image", image);
    console.log("imagePreview", imagePreview);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gender", gender);
    formData.append("avatar", image);

    try {
      const res = console.log(res);

      if (res) {
        setName("");
        setEmail("");
        setPassword("");
        setGender("");
        setImage("");
        setImagePreview("");

        toast.success(res.msg);
      }
    } catch (error) {
      toast.error(error.msg);
      console.log(error);
    }
  };

  const postmodalRef = useRef(null);
  const dispatch = useDispatch();

  console.log(postmodalRef);

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
            <div className="radio-input-container">
              <div>
                <label htmlFor="male">Male:</label>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  required="true"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="female">Female: </label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  required="true"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="other">Other: </label>
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  required="true"
                  value="other"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="bio">Bio</label>
              <textarea cols={3} rows={3} />
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
