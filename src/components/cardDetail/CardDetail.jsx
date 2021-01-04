import React, { useState, useEffect } from "react";
import { CardDetailContainer, CardWrapper } from "./CardDetail.styles";
import space from "../../assets/space.png";
import CommentBox from "./CommentBox";
import Button from "../button/Button";
import { Image } from "cloudinary-react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../graphql/mutation/addComment";
import { GET_SINGLE_POST } from "../../graphql/queries/singlePost";
import Transformation from "cloudinary-react/lib/components/Transformation";

const CardDetail = ({ open, setOpen, post }) => {
  const postIdS = post.id.toString();
  const newPostId = parseInt(postIdS);

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [
      { query: GET_SINGLE_POST, variables: { postId: newPostId } },
    ],
  });

  const [detail, setDetail] = useState({
    comment: "",
  });
  const loadingStyle = {
    width: "100vw",
    height: "555px",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  };

  const handleAddComment = () => {
    if (detail.comment === "") {
      return;
    }
    addComment({
      variables: {
        postId: newPostId,
        title: detail.comment,
      },
    })
      .then(({ data }) => {
        setDetail({
          comment: "",
        });
      })
      .catch((e) => {
        console.log(e);
      });

    return;
  };

  const created = Date(post.createdAt);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const postedDesc =
    post.description >= 200 ? post.description.slice(0, 200) : post.description;

  return (
    open && (
      <CardWrapper>
        <CardDetailContainer>
          <button onClick={() => setOpen(false)} className="close-btn">
            &#10060;
          </button>
          <div className="detail">
            <div className="first">
              <h1 className="name">{post.user.firstName}</h1>
              <Image
                cloudName="dqjxofmsl"
                publicId={post.imageName}
                height="300"
              />
              <h1 className="title">{post.title}</h1>
              <p className="description">
                {postedDesc}
                1975.
              </p>
            </div>
            {/* <span className="date">Created At: {created}</span> */}
          </div>
          <div className="comment">
            <div className="title">
              <h1>Comments</h1>
            </div>
            <div className="comments">
              {post.comments.map((s) => (
                <CommentBox comment={s} />
              ))}
            </div>
            <div className="add-comment">
              <textarea
                name="comment"
                value={detail.comment}
                onChange={handleChange}
                className="textarea"
                placeholder="Add Comment"
                autoFocus
              />
              <Button
                modifiers={"secondary"}
                onClick={() => handleAddComment()}
              >
                Add
              </Button>
            </div>
          </div>
        </CardDetailContainer>
      </CardWrapper>
    )
  );
};

export default CardDetail;
