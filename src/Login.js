import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
