import React from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, nbPages, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return <h1 style={{ textAlign: "center" ,color:"white" }}>Loading...</h1>;
  }

  return (
    <>
      {hits.map((currentPost) => {
        const { title, author, num_comments, objectID, url } = currentPost;
        return (
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p>
              By: <span>{author}</span> | <span>{num_comments}</span> comments
            </p>
            <div className="card-button">
              <a href={url} target=" ">
                Read More
              </a>
              <button className="rembtn" onClick={() => removePost(objectID)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Stories;
