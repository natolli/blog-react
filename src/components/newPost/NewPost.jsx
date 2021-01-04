import React, { useState, useCallback } from "react";
import { ModalWrapper } from "./NewPost.Styles";
import Button from "../button/Button";
import InputButton from "../button/InputButton";
import CheckBox from "./CheckBox";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../graphql/mutation/createPost";
import Dropzone from "react-dropzone";
import Loader from "../loader/Loader";

const NewPost = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [newPostForm, setNewPostForm] = useState({
    title: "",
    description: "",
  });
  const [alert, setAlert] = useState({ on: false, message: null });
  const [imageUpload, setImageUpload] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [topics, setTopics] = useState({
    Science: false,
    Art: false,
    Music: false,
    Gaming: false,
    Humor: false,
    Culture: false,
    Food: false,
    Pets: false,
    Sport: false,
  });

  let topicsArray = [];

  const handelAlert = (message) => {
    setAlert({ on: true, message });
    setTimeout(() => setAlert({ on: false, message: null }), 3000);
  };

  Object.keys(topics).map((key) => {
    const value = topics[key];
    if (value === true) {
      topicsArray = [...topicsArray, key];
    }
  });

  const { title, description } = newPostForm;

  const handleUpload = (acceptedFiles) => {
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onloadend = () => {
      setImageUpload(reader.result);
    };
    setImageName(acceptedFiles[0].name);
    setCompleted(true);
  };

  const [createPost] = useMutation(CREATE_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      title === "" ||
      description === "" ||
      imageUpload === null ||
      topicsArray.length === 0
    ) {
      handelAlert("Please fill in all the fields");
      return;
    }

    if (topicsArray.length > 3) {
      handelAlert("You can only have a maxmium of 3 topics");
      return;
    }

    setLoading(true);

    createPost({
      variables: {
        input: { topics: topicsArray, description, title },
        picture: { file: imageUpload, filename: imageName },
      },
    })
      .then(({ data }) => {
        setTimeout(() => {
          setLoading(false);
          window.location.reload();
          setModal(false);
        }, 1000);
      })
      .catch((e) => {
        handelAlert(e.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPostForm({ ...newPostForm, [name]: value });
  };
  const handleCheckedChange = (e) => {
    const { name, checked } = e.target;

    setTopics({ ...topics, [name]: checked });
  };

  return modal ? (
    <ModalWrapper>
      {loading ? (
        <Loader />
      ) : (
        <div className="modalContainer">
          <div className="header">
            <h1 className="title">New Post</h1>
            <button className="cross" onClick={() => setModal(!modal)}>
              &#10006;
            </button>
          </div>
          {alert.on && (
            <div className="warn">
              <h5>{alert.message}</h5>
            </div>
          )}
          <form className="form">
            <div className="titleContainer">
              <h1 className="title-label">Title</h1>
              <input
                className="titleLabel"
                name="title"
                type="text"
                onChange={handleChange}
                value={title}
                required
              />
            </div>

            <textarea
              name="description"
              value={description}
              onChange={handleChange}
              className="textarea"
              placeholder="Description"
              autoFocus
              required
            />
            <Dropzone onDrop={(acceptedFiles) => handleUpload(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section className="dropzone">
                  <div
                    {...getRootProps()}
                    style={{
                      outline: "none",
                    }}
                  >
                    <input {...getInputProps()} />
                    {completed ? (
                      <h1>Image Selected</h1>
                    ) : (
                      <h3
                        style={{
                          outline: "none",
                          padding: "50px",
                        }}
                      >
                        Drag 'n' drop some image here, or click to select files
                      </h3>
                    )}
                  </div>
                </section>
              )}
            </Dropzone>
            <div className="check-group">
              <CheckBox
                item={topics.Art}
                name="Art"
                handleChange={handleCheckedChange}
              />
              <CheckBox
                item={topics.Culture}
                name="Culture"
                handleChange={handleCheckedChange}
              />
              <CheckBox
                item={topics.Food}
                name="Food"
                handleChange={handleCheckedChange}
              />
              <CheckBox
                item={topics.Gaming}
                name="Gaming"
                handleChange={handleCheckedChange}
              />
              <CheckBox
                item={topics.Humor}
                name="Humor"
                handleChange={handleCheckedChange}
              />
              <CheckBox
                item={topics.Music}
                name="Music"
                handleChange={handleCheckedChange}
              />
              <CheckBox
                item={topics.Pets}
                name="Pets"
                handleChange={handleCheckedChange}
              />
              <CheckBox
                item={topics.Science}
                name="Science"
                handleChange={handleCheckedChange}
              />
              <CheckBox
                item={topics.Sport}
                name="Sport"
                handleChange={handleCheckedChange}
              />
            </div>
            <div />
            <InputButton
              type="submit"
              onClick={(e) => handleSubmit(e)}
              modifiers={["rounded", "secondary"]}
            >
              Add Post
            </InputButton>
          </form>
        </div>
      )}
    </ModalWrapper>
  ) : (
    <Button
      modifiers={["secondary", "rounded"]}
      className="plus"
      onClick={() => setModal(!modal)}
    >
      New Post
    </Button>
  );
};

export default NewPost;
