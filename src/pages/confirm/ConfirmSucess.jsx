import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CONFIRM } from "../../graphql/mutation/confirm";
import { ConfirmConatiner } from "./Confirm.styles";
import { ConfirmSucessSvg } from "../../assets/confirmSucess";

const ConfirmSucess = () => {
  const { confirmId } = useParams();
  const [confirmUser, { data, loading, error }] = useMutation(CONFIRM);

  let body = null;

  useEffect(() => {
    confirmUser({
      variables: { token: confirmId },
    });
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    body = <h1>404 | Error</h1>;
  }
  if (data && data.confirmUser === true) {
    body = (
      <>
        <ConfirmSucessSvg />
        <h1>
          Your Email is confirmed. You can now signin in to your new account.
        </h1>
      </>
    );
  } else if (data && data.confirmUser === false) {
    body = <h1>404 | Error</h1>;
  }

  return <ConfirmConatiner>{body}</ConfirmConatiner>;
};

export default ConfirmSucess;
