import React from "react";
import { TopicsContainer } from "./TopicsCard.styles";
import { Link } from "react-router-dom";

const TopicsCard = ({ name }) => {
  return (
    <TopicsContainer to="/topics">
      <Link className="name" to={`/topic/${name}`}>
        # {name}
      </Link>
    </TopicsContainer>
  );
};

export default TopicsCard;
