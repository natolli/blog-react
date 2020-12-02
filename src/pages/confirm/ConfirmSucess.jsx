import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CONFIRM } from "../../graphql/mutation/confirm";
import { ConfirmSucessSvg } from "../../assets/confirmSucess";
import Info from "../../components/info/Info";

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

  return <Info>{body}</Info>;
};

export default ConfirmSucess;
