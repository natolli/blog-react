import React from "react";
import { RightNavContainer } from "./Navbar.styles";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries/me";
import Button from "../button/Button";
import { LOGOUT } from "../../graphql/mutation/logout";
import { Redirect } from "react-router-dom";
import { useMutation } from "@apollo/client";

const RightNav = ({ open }) => {
  const { data, loading, error } = useQuery(ME);

  const [logoutUser, logout] = useMutation(LOGOUT, {
    refetchQueries: [{ query: ME }],
  });

  let body = null;

  const handleProfile = () => {};

  const handleLogout = () => {
    logoutUser();
  };
  if (logout.loading) {
    return <h1>Loading</h1>;
  }
  if (logout.error) {
    return <h1>Error</h1>;
  }
  if (logout.data && logout.data.logout === true) {
    console.log(logout);

    return <Redirect to="/" />;
  }
  if (loading) {
  } else if (!data.me) {
    body = (
      <>
        <li className="links">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="links">
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li className="links">
          <Link to="/signin" className="link">
            Sign In
          </Link>
        </li>
      </>
    );
  } else {
    body = (
      <div className="cen">
        <Link to="/posts" style={{ fontSize: "1.5rem" }} className="name">
          Home
        </Link>
        <Link
          style={{ fontSize: "1.5rem" }}
          className="name"
          to={`/user/${data.me.id}`}
        >
          {data.me.firstName}
        </Link>
        <Button modifiers={["rounded", "secondary"]} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    );
  }

  if (error) {
    console.log(error);
  }

  return <RightNavContainer open={open}>{body}</RightNavContainer>;
};

export default RightNav;
