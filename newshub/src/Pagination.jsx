import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };

  const buttonStyle = {
    cursor: "pointer",
    margin: "0 5px",
    padding: "10px 15px",
    borderRadius: "5px",
    background: "yellow",
    color: "black",
    border: "none",
    fontSize: "16px",
  };

  const paragraphStyle = {
    margin: "0 10px",
    fontSize: "18px",
    color: "white",
    textTransform: "uppercase",
  };

  return (
    <>
      
      <div style={containerStyle}>
        <button onClick={() => getPrevPage()} style={buttonStyle}>
          Previous
        </button>
        <p style={paragraphStyle}>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()} style={buttonStyle}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
