import React from "react";
import { CardContainer } from "./Card.styles";
import space from "../../assets/space.png";
import TopicsCard from "../topicsCard/TopicsCard";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

const Card = ({ post }) => {
  console.log(post);
  return (
    <>
      {post && (
        <CardContainer>
          <>
            <div className="header">
              <h1 className="name">{post.user.firstName}</h1>
            </div>
            <Image cloudName="dqjxofmsl" publicId={`${post.imageName}.png`} />
            <div className="body">
              <h1 className="title">{post.title}</h1>
              <p className="description">{post.description}</p>
              <div className="bottom">
                <div className="first">
                  <div className="topicItems">
                    {post.topics.map((topic) => (
                      <TopicsCard name={topic} />
                    ))}
                  </div>
                  <Link>
                    <p
                      classname="comment"
                      style={{
                        fontSize: "1.2rem",
                        textDecoration: "underline",
                      }}
                    >
                      View Comments
                    </p>
                  </Link>
                </div>
                <div className="second">
                  <h1 className="rating">23</h1>
                </div>
              </div>
            </div>
          </>
        </CardContainer>
      )}
    </>
  );
};

export default Card;
