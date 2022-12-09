import React from "react";
import "./AuthButtonGoogle.sass";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";

const AuthButtonGoogle = () => {
  return (
    <div className="Google_button">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse.credential);
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default AuthButtonGoogle;
