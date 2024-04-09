import { useEffect, useState } from "react";
import { useGetAllTagsQuery } from "../../features/post/postapi";
import Wrapper from "../../assets/wrappers/TagInput";

const TagInput = ({ selectedTags, setSelectedTags }) => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [allTags, setAllTags] = useState([]);

  const [tagSuggestions, setTagSuggestions] = useState([]);
  const { data } = useGetAllTagsQuery();

  const isAlphabetKey = (key) => /^[a-zA-Z]$/.test(key) || key === "Backspace";

  useEffect(() => {
    if (data) {
      const allNames = data.tags.map((obj) => obj.name.toLowerCase());
      setAllTags([...allNames]);
    }
  }, [data]);

  const handleTagInputChange = (event) => {
    const input = event.target.value;

    console.log(input);
    setTagInput(input);

    const filteredSuggestions = tagSuggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase()) &&
        !tags.includes(suggestion.trim())
    );

    setTagSuggestions(filteredSuggestions);
  };

  const handleKeyDown = (event) => {
    if (isAlphabetKey(event.key)) {
      setTagSuggestions([...allTags]);
    }

    if (
      event.key === "Enter" &&
      tagInput.trim() !== "" &&
      allTags.includes(tagInput.trim().toLowerCase())
    ) {
      setTags([...tags, tagInput.trim().toLowerCase()]);
      // Clear the tag input
      setTagInput("");

      const filteredTags = allTags.filter(
        (tag) =>
          tag.toLowerCase() !== tagInput.trim().toLowerCase() &&
          !tags.includes(tag)
      );
      setTagSuggestions([...filteredTags]);
    }
  };
  const handleTagClick = (clickedTag) => {
    // Add a clicked suggestion to the list
    setTags([...tags, clickedTag]);
    const resTag =
      data && data.tags.filter((t) => t.name.toLowerCase() === clickedTag);

    setSelectedTags([...selectedTags, ...resTag]);

    setTagInput("");
    const filteredTags = allTags.filter(
      (tag) =>
        tag.toLowerCase() !== clickedTag.toLowerCase() && !tags.includes(tag)
    );
    setTagSuggestions([...filteredTags]);
  };

  return (
    <Wrapper>
      <div className="taginput-container">
        {tags &&
          tags.map((tag, index) => (
            <p key={index} className="tag">
              {tag}
              <button></button>
            </p>
          ))}
        <input
          type="text"
          value={tagInput}
          onChange={handleTagInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter to add tags"
        />
      </div>

      <div>
        {tagSuggestions &&
          tagSuggestions.map((suggestion, index) => (
            <p
              key={index}
              className="tag-suggestion"
              onClick={() => handleTagClick(suggestion)}
            >
              {suggestion}
            </p>
          ))}
      </div>
    </Wrapper>
  );
};

export default TagInput;
