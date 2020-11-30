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
    update(cache, { data: { logout } }) {
      cache.writeQuery({
        query: ME,
        data: {
          me: undefined,
        },
      });
    },
  });

  let body = null;

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
      <>
        <h1 className="name">{data.me.firstName}</h1>
        <Button modifiers={["small", "primary"]} onClick={handleLogout}>
          Logout
        </Button>
      </>
    );
  }

  if (error) {
    console.log(error);
  }

  return <RightNavContainer open={open}>{body}</RightNavContainer>;
};

export default RightNav;
