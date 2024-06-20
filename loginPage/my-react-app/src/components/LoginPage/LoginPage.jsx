import React from "react";
import "./LoginPage.css";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import apple from "./images/apple.png";
const LoginPage = () => {
  return (
    <>
      <div className="login-container">
        <p id="a">Log in to your TEN account</p>
        <button className="google-btn">
          <img src={google} alt="google" width="20" height="15" /> Continue with
          Google
        </button>{" "}
        {/*add link to gmail*/}
        <button className="facebook-btn">
          <img src={facebook} alt="facebook" width="20" height="15" /> Continue
          with Facebook
        </button>{" "}
        {/*add link to facebook*/}
        <button className="apple-btn">
          <img src={apple} alt="apple" width="20" height="15" /> Continue with
          Apple
        </button>{" "}
        {/*add link to apple*/}
        <form>
          <input type="email" id="email" placeholder="Email"></input>
          <input type="password" id="password" placeholder="Password"></input>
          <button className="login-btn">Log in</button>
          {"or "}
          <a href="./" class="forgot-password">
            Forgot Password
          </a>
          <p>
            Don't have an account?{" "}
            <a href="./" class="sign-up">
              Sign up
            </a>
          </p>
          <a href="./" class="org-login">
            Log in with your organization
          </a>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
