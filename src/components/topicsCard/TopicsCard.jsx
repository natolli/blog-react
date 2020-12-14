import React from "react";
import { TopicsContainer } from "./TopicsCard.styles";

const TopicsCard = ({ name }) => {
  return (
    <TopicsContainer to="/topics">
      <p className="name"># {name}</p>
    </TopicsContainer>
  );
};

export default TopicsCard;
