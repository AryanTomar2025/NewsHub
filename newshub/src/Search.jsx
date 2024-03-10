import React from "react";
import { useGlobalContext } from "./Context";

export const Search = () => {
  const { query, searchPost } = useGlobalContext();

  const searchBarStyle = {
    textAlign: "center",
    margin: "20px 0",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "2rem",
    color: "#3498db", 
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "300px", 
    outline: "none",
  };

  return (
    <>
      <div style={searchBarStyle}>
        <h1 style={headingStyle}> <span style={{ color: "#FFFFFF" }}>News</span>
        <span style={{ color: "yellow" }}>Hub</span>
 </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search here"
              value={query}
              onChange={(e) => searchPost(e.target.value)}
              style={inputStyle}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
