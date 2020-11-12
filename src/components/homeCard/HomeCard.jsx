import React from "react";
import { CardContainer } from "./HomeCard.styles";

const HomeCard = ({ Image, title, description }) => {
  return (
    <CardContainer>
      <Image className="card-image" />
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="description">{description}</div>
      </div>
    </CardContainer>
  );
};

export default HomeCard;
