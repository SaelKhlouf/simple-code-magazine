import { useRef } from "react";
import "./App.css";
import ArticleComponent from "./Components/ArticleComponent/ArticleComponent";
import AsideMenuComponent from "./Components/AsideMenuComponent/AsideMenuComponent";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import MainHeaderComponent from "./Components/MainHeaderComponent/MainHeaderComponent";

function App() {
  const postsRef = useRef([
    {
      postId: 1,
      alt: "Person programming",
      title: "How to Learn Web Development",
      author: "By Sael Khlouf",
    },
    {
      postId: 2,
      alt: "Lightning",
      title: "The Unknown Powers of CSS",
      author: "By Jim Dillon",
    },
    {
      postId: 3,
      alt: "JavaScript code on a screen",
      title: "Why JavaScript is Awesome",
      author: "By Matilda",
    },
  ]);

  return (
    <>
      <div className="container">
        <MainHeaderComponent></MainHeaderComponent>

        <div className="row">
          <ArticleComponent> </ArticleComponent>

          <AsideMenuComponent posts={postsRef.current}></AsideMenuComponent>
        </div>

        <FooterComponent></FooterComponent>
      </div>
    </>
  );
}

export default App;
