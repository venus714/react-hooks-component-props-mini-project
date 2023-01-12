import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import About from "./About";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image}/>
      <ArticleList posts={blogData.posts}/>

    </div>
  );
}

export default App;
