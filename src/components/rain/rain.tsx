import React, { useEffect, useState } from "react";
import { IRain } from "./rain.interface";
import "./rain.css";

const Rain: React.FC<IRain> = (props: IRain) => {
  const { left, randomSkill } = props;
  const [skill, setSkill] = useState<string | null>(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        const imageModule = await import(`./icon/${randomSkill}.png`);
        setSkill(imageModule.default);
      } catch (error) {
        console.error("Error importing image:", error);
      }
    };

    importImage();
  }, [randomSkill]);

  const rainStyle: React.CSSProperties = {
    width: "50px",
    height: "50px",
    backgroundColor: "#2c2e34",
    borderRadius: "50%",
    position: "absolute",
    top: "0",
    left: left,
    backgroundImage: skill ? `url(${skill})` : "none",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    animation: "fall 4s linear",
    userSelect: "none",
  };

  return <div style={rainStyle} />;
};

export default Rain;
