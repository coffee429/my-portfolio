import React, { useEffect, useState } from "react";
import "./contact.css";
import { IContact } from "./contact.interface";
import utils from "../../utils/utils";
import { UtilsEnum } from "../../utils/utils.constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ContactPointEnum } from "./contact.constants";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC<IContact> = (props: IContact) => {
  const { order, source, isViewed } = props;
  const [icon, setIcon] = useState<IconDefinition>(faFacebook);

  useEffect(() => {
    const contactPoint = document.getElementById(source);
    if (contactPoint) {
      contactPoint.style.transform = isViewed
        ? utils.move(-order * UtilsEnum.RADIUS, 0)
        : utils.move(0, 0);
      contactPoint.style.opacity = isViewed ? "1" : "0";
      contactPoint.style.zIndex = isViewed ? "0" : "-1";
    }
  }, [isViewed]);

  useEffect(() => {
    switch (source) {
      case ContactPointEnum.FACEBOOK:
        setIcon(faFacebook);
        break;
      case ContactPointEnum.GITHUB:
        setIcon(faGithub);
        break;
      case ContactPointEnum.LINKEDIN:
        setIcon(faLinkedin);
        break;
    }
  }, []);

  const onClick = (source: string) => {
    window.open(source);
  };
  return (
    <div>
      <div className="contact" id={source} onClick={() => onClick(source)}>
        <FontAwesomeIcon icon={icon} className="contact_icon" />
      </div>
    </div>
  );
};

export default Contact;
