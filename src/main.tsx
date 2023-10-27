import React, { useEffect, useState } from "react";
import "./main.css";
import IntroductionComponent from "./components/introduction/introduction";
import MyAvatar from "./components/avatar/avatar";
import Information from "./components/information/infomation";
import Rain from "./components/rain/rain";
import { UtilsEnum } from "./utils/utils.constants";

function Main() {
  const [rain0, setRain0] = useState<JSX.Element[]>([]);
  const [rain1, setRain1] = useState<JSX.Element[]>([]);
  const [rain2, setRain2] = useState<JSX.Element[]>([]);

  useEffect(() => {
    document.title = "Coffee429";
  }, []);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const buildRainDrop0 = () => {
      const randomX = Math.floor(Math.random() * (windowWidth - 50)) + "px";
      const randomSkill = Math.floor(Math.random() * UtilsEnum.SKILL_TOTAL);
      const rainDrops = <Rain left={randomX} randomSkill={randomSkill} />;
      setRain0((prevRain) => [...prevRain, rainDrops]);
      setTimeout(() => {
        setRain0((prevRain) => prevRain.slice(1));
      }, UtilsEnum.RAIN_RESET);
    };

    // Use setInterval to create new circles at random intervals
    const intervalId0 = setInterval(buildRainDrop0, UtilsEnum.RAIN_STOP);

    const buildRainDrop1 = () => {
      const randomX = Math.floor(Math.random() * (windowWidth - 50)) + "px";
      const randomSkill = Math.floor(Math.random() * UtilsEnum.SKILL_TOTAL);
      const rainDrops = <Rain left={randomX} randomSkill={randomSkill} />;
      setRain1((prevRain) => [...prevRain, rainDrops]);
      setTimeout(() => {
        setRain1((prevRain) => prevRain.slice(1));
      }, UtilsEnum.RAIN_RESET + 1000);
    };

    // Use setInterval to create new circles at random intervals
    const intervalId1 = setInterval(buildRainDrop1, UtilsEnum.RAIN_STOP + 1000);

    const buildRainDrop2 = () => {
      const randomX = Math.floor(Math.random() * (windowWidth - 50)) + "px";
      const randomSkill = Math.floor(Math.random() * UtilsEnum.SKILL_TOTAL);
      const rainDrops = <Rain left={randomX} randomSkill={randomSkill} />;
      setRain2((prevRain) => [...prevRain, rainDrops]);
      setTimeout(() => {
        setRain2((prevRain) => prevRain.slice(1));
      }, UtilsEnum.RAIN_RESET + 2000);
    };

    // Use setInterval to create new circles at random intervals
    const intervalId2 = setInterval(buildRainDrop2, UtilsEnum.RAIN_STOP + 2000);

    return () => {
      clearInterval(intervalId0);
      clearInterval(intervalId1);
      clearInterval(intervalId2);
    };
  }, []);

  return (
    <div className="container">
      <IntroductionComponent />
      <MyAvatar />
      <Information />
      {rain0.map((rainDrop, index) => (
        <div key={index}>{rainDrop}</div>
      ))}
      {rain1.map((rainDrop, index) => (
        <div key={index}>{rainDrop}</div>
      ))}
      {rain2.map((rainDrop, index) => (
        <div key={index}>{rainDrop}</div>
      ))}
    </div>
  );
}

export default Main;
