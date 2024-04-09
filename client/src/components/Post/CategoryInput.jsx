import { useEffect, useState } from "react";
import { useGetAllCategoriesQuery } from "../../features/post/postapi";

const CategoryInput = ({ setSelectedCategory, setSelectedTopic }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [topics, setTopics] = useState([]);

  const { data } = useGetAllCategoriesQuery();

  useEffect(() => {
    if (data) {
      setCategories([...data.categories]);
    }
  }, [data]);

  // console.log("cat", category);

  const handleCategory = (e) => {
    setCategory(e.target.value);

    const categoryfilter = categories.filter(
      (cat) => cat.name == e.target.value
    );
    console.log("catfilter", categoryfilter);
    setSelectedCategory(...categoryfilter);

    setTopics([...categoryfilter[0].topics]);
  };

  const handleTopic = (e) => {
    const topic = e.target.value;
    setSelectedTopic(topic);
  };

  return (
    <>
      <div className="post-input-container">
        <label htmlFor="category">
          Select Category{" "}
          <span style={{ color: "red", marginLeft: "2px" }}>&#9733;</span>
        </label>
        <select name="category" id="category" onChange={handleCategory}>
          <option value="">Select Category</option>
          {categories &&
            categories.map((cat) => (
              <>
                <option value={cat.name} key={cat._id}>
                  {cat.name}
                </option>
              </>
            ))}
        </select>
      </div>
      <div className="post-input-container">
        <label htmlFor="topic">
          Select Topic{" "}
          <span style={{ color: "red", marginLeft: "2px" }}>
            &#9733; {/* Unicode character for a solid star */}
          </span>
        </label>
        <select name="topic" id="topic" onChange={handleTopic}>
          <option value="">Select Topic</option>
          {topics &&
            topics.map((topic) => (
              <>
                <option value={topic.name}>{topic.name}</option>
              </>
            ))}
        </select>
      </div>
    </>
  );
};

export default CategoryInput;
