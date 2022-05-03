import React from "react";
import google from "../../asset/icon/google.png";
import github from "../../asset/icon/GitHub.png";
import auth from "../../firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const SocialSignIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] =
    useSignInWithGithub(auth);
  return (
    <div className="d-flex justify-content-around">
      <button className="border-0 bg-white">
        <img
          onClick={() => signInWithGoogle()}
          src={google}
          width={"20px"}
          alt=""
          srcset=""
        />
      </button>
      <button className="border-0 bg-white ">
        <img
          onClick={() => signInWithGithub()}
          src={github}
          width={"20px"}
          alt=""
          srcset=""
        />
      </button>
    </div>
  );
};

export default SocialSignIn;
