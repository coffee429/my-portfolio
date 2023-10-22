import React, { useEffect, useState } from "react";
import "./information.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import Contact from "../contact/contact";
import { ContactPointEnum } from "../contact/contact.constants";

const Information: React.FC = () => {
  const [isViewed, setIsViewed] = useState<boolean>(false);

  const onClick = () => {
    setIsViewed(!isViewed);
    console.log(isViewed);
  };
  return (
    <div>
      <div className="infor_expand" onClick={onClick}>
        <FontAwesomeIcon icon={faWarning} className="infor_expand_click" />
        <div className="spinner"></div>
      </div>
      <Contact
        order={1}
        source={ContactPointEnum.FACEBOOK}
        isViewed={isViewed}
      />
      <Contact order={2} source={ContactPointEnum.GITHUB} isViewed={isViewed} />
      <Contact
        order={3}
        source={ContactPointEnum.LINKEDIN}
        isViewed={isViewed}
      />
    </div>
  );
};

export default Information;
