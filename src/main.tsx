import React, { useEffect } from "react";
import "./main.css";
import IntroductionComponent from "./components/introduction/introduction";
import MyAvatar from "./components/avatar/avatar";
import Information from "./components/information/infomation";

function Main() {
  useEffect(() => {
    document.title = "Coffee429";
  }, []);

  return (
    <div className="container">
      <IntroductionComponent />
      <MyAvatar />
      <Information />
    </div>
  );
}

export default Main;
