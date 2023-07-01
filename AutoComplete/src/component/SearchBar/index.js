import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const SearchBar = ({
  name,
  id,
  label,
  placeholder,
  listBox,
  transformData,
  promise,
  debounceWait,
}) => {
  const [query, setQuery] = useState("");

  const [data, error] = useFetch(query, transformData, promise,debounceWait);
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <label for={name}>{label}</label>
      <br />
      <input
        id={id}
        name={name}
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {data && data.length > 0 && listBox(data)}
    </>
  );
};

export default SearchBar;
