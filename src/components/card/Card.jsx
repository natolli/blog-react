import React, { useState } from "react";
import { CardContainer } from "./Card.styles";
import TopicsCard from "../topicsCard/TopicsCard";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import UpvoteSection from "../upvote/UpvoteSection";
import CardDetail from "../cardDetail/CardDetail";
import { useQuery, useMutation } from "@apollo/client";
import { ME } from "../../graphql/queries/me";
import Loader from "../loader/Loader";
import Alert from "../alert/Alert";
import { AiFillDelete } from "react-icons/ai";
import { DELETE_POST } from "../../graphql/mutation/deletePost";

const Card = ({ post }) => {
  let postIdS = null;
  let newPostId = null;
  if (post) {
    postIdS = post.id.toString();
    newPostId = parseInt(postIdS);
  }

  const [open, setOpen] = useState(false);

  const [deletePost] = useMutation(DELETE_POST);

  let isUsersPost = false;

  const { data, loading, error } = useQuery(ME);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert>Failed to get posts</Alert>;
  }
  if (data && post) {
    if (data.me.id === post.user.id) {
      isUsersPost = true;
    }
  }

  const handleDeletePost = () => {
    deletePost({ variables: { id: newPostId } })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    window.location.reload();
  };

  return (
    <>
      {post && (
        <>
          {open && <CardDetail open={open} setOpen={setOpen} post={post} />}
          <CardContainer>
            <>
              <div className="header">
                <Link className="name" to={`/user/${post.user.id}`}>
                  {post.user.firstName}
                </Link>
                {isUsersPost && (
                  <div
                    className="delete-post"
                    onClick={() => handleDeletePost()}
                  >
                    <AiFillDelete />
                  </div>
                )}
              </div>
              <Image
                cloudName="dqjxofmsl"
                publicId={
                  /[.]/.exec(post.imageName)
                    ? post.imageName
                    : `${post.imageName}.png`
                }
              />
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
