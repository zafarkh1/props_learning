import React from "react";

const Props2 = ({ data, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {data.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Props2;
