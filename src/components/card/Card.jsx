import React, { useState } from "react";
import { CardContainer } from "./Card.styles";
import TopicsCard from "../topicsCard/TopicsCard";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import UpvoteSection from "../upvote/UpvoteSection";
import CardDetail from "../cardDetail/CardDetail";

const Card = ({ post }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {post && (
        <>
          {open && <CardDetail open={open} setOpen={setOpen} post={post} />}
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
                        onClick={() => setOpen(true)}
                      >
                        View Comments
                      </p>
                    </Link>
                  </div>
                  <div className="second">
                    <UpvoteSection post={post} />
                  </div>
                </div>
              </div>
            </>
          </CardContainer>
        </>
      )}
    </>
  );
};

export default Card;
