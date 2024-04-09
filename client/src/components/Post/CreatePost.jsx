import { useRef, useState } from "react";
import Wrapper from "../../assets/wrappers/CreatePost";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import TagInput from "./TagInput";
import CategoryInput from "./CategoryInput";
import { toast } from "react-toastify";
import { useCreatePostMutation } from "../../features/post/postapi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [editorValue, setEditorValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [imagespreview, setImagesPreview] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const [createPost] = useCreatePostMutation();

  const quillRef = useRef(null);

  const handleChange = (value) => {
    setEditorValue(value);
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const formData = new FormData();

    if (
      !title ||
      !editorValue ||
      !images ||
      !selectedCategory ||
      !selectedTopic ||
      !selectedTags
    ) {
      toast.error("Please enter the required field");
    }
    const tags = selectedTags.map((obj) => obj._id);
    formData.append("title", title);
    formData.append("content", editorValue);
    formData.append("category", selectedCategory._id);
    formData.append("topic", selectedTopic);

    formData.append("publisher", user._id);

    images.forEach((image) => {
      formData.append("postimages", image);
    });

    tags.forEach((tag) => {
      formData.append("tags", tag);
    });

    // console.log(formData);

    try {
      const res = await createPost(formData).unwrap();
      console.log("res", res);
      if (res) {
        toast.success("Post uploaded successfully");
        setEditorValue("");
        setSelectedTags([]);
        setTitle("");
        setImages([]);
        setImagesPreview([]);
        setSelectedCategory(null);
        setSelectedTopic(null);
        navigate("/");
      }
    } catch (error) {
      console.log("errr", error);
      toast.error(error.data.msg);
    }
  };

  const handleImage = (e) => {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      setImages((prev) => [...prev, files[i]]);

      const reader = new FileReader();

      reader.onload = () => {
        setImagesPreview((prev) => [...prev, reader.result]);
      };

      reader.readAsDataURL(files[i]);
    }
  };

  // console.log("sc", selectedCategory);
  // console.log("st", selectedTopic);
  return (
    <Wrapper>
      <div className="post-input-container">
        <label htmlFor="title">
          Title{" "}
          <span
            style={{
              color: "red",
              marginLeft: "2px",
            }}
          >
            &#9733;
          </span>
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <label className="editor-label">
        Post Content{" "}
        <span style={{ color: "red", marginLeft: "2px" }}>
          &#9733; {/* Unicode character for a solid star */}
        </span>
      </label>
      <div className="text-editor">
        <EditorToolbar />
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={editorValue}
          onChange={handleChange}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
        />
      </div>
      {editorValue && (
        <div className="preview-container">
          <p className="title">Preview </p>
          <div
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: editorValue }}
          />
        </div>
      )}

      <div className="post-input-container">
        <label htmlFor="image">
          Add Images{" "}
          <span style={{ color: "red", marginLeft: "2px" }}>
            &#9733; {/* Unicode character for a solid star */}
          </span>
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          name="image"
          id="image"
          onChange={handleImage}
        />
      </div>

      <CategoryInput
        setSelectedCategory={setSelectedCategory}
        setSelectedTopic={setSelectedTopic}
      />

      <div className="post-input-container">
        <label htmlFor="tags">
          Add Tags{" "}
          <span style={{ color: "red", marginLeft: "2px" }}>
            &#9733; {/* Unicode character for a solid star */}
          </span>
        </label>
        <TagInput
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add Post
      </button>
    </Wrapper>
  );
};

export default CreatePost;
