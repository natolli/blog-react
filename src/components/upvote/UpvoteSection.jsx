import React from "react";
import { UpvoteContainer } from "./UpvoteSection.styles";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import { useMutation } from "@apollo/client";
import { VOTE } from "../../graphql/mutation/vote";
import { ME } from "../../graphql/queries/me";
import { GET_SINGLE_POST } from "../../graphql/queries/singlePost";

const UpvoteSection = ({ post }) => {
  const postId = post.id.toString();
  const newPostId = parseInt(postId);

  const [vote] = useMutation(VOTE, {
    refetchQueries: [
      { query: GET_SINGLE_POST, variables: { postId: newPostId } },
    ],
  });

  const handleUpvote = () => {
    vote({
      variables: {
        postId: newPostId,
        value: 1,
      },
    })
      .then(({ data }) => {
        console.log(data);
        // you can do something with the response here
      })
      .catch((e) => {
        console.log(e);
        // you can do something with the error here
      });
  };

  const handleDownvote = () => {
    vote({
      variables: {
        postId: newPostId,
        value: -1,
      },
    })
      .then(({ data }) => {
        console.log(data);
        // you can do something with the response here
      })
      .catch((e) => {
        console.log(e);
        // you can do something with the error here
      });
  };

  return (
    <UpvoteContainer>
      <div className="btns">
        <div className="x">
          <BsCaretUpFill onClick={() => handleUpvote()} />
        </div>
        <div className="x">
          <BsCaretDownFill onClick={() => handleDownvote()} />
        </div>
      </div>
      <h1 className="score">{post.points}</h1>
    </UpvoteContainer>
  );
};

export default UpvoteSection;
