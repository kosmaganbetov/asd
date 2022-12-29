import React from "react";
import "./AuthButtonGoogle.sass";
import { useGoogleLogin } from "@react-oauth/google";
import Photo from "../../../assets/images/GoogleIcon.png";
import axios from "axios";

const AuthButtonGoogle = () => {
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <>
      <button className="App-header" onClick={login}>
        <img className="Goolge_Img" src={Photo} />
        <p>Continue with google</p>
      </button>
    </>
  );
};

export default AuthButtonGoogle;
