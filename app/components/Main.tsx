import React from "react";
import ArticleList from "./ArticleList";

const Main = (props) => {
  const { blog } = props;

  return (
    <main className="w-4/5">
      <ArticleList blog={blog} />
    </main>
  );
};

export default Main;
