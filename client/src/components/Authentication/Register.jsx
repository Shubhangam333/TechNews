import { useState } from "react";
import Wrapper from "../../assets/wrappers/Register";
import { useRegisterMutation } from "../../features/auth/authapi";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const Register = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUser, { isLoading }] = useRegisterMutation();

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
      const res = await createUser(formData).unwrap();
      console.log(res);

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

  return (
    <Wrapper className="container">
      <div className="auth-container">
        <h1>Register</h1>
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
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
      {isLoading && <Loader />}
    </Wrapper>
  );
};

export default Register;
