import React from "react";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <>
      <div className="signup-form">
        <h2>Sign up and start learning</h2>
        <form>
          <input type="text" id="full-name" placeholder="Full name"></input>
          <input type="email" id="email" placeholder="Email"></input>
          <input type="password" id="password" placeholder="Password"></input>
          <div className="checkbox-signup">
            <input type="checkbox" id="newsletter"></input>
            <label for="newsletter">
              Send me special offers, personalized recommendations, and learning
              tips.
            </label>
          </div>

          <button type="submit">Sign up</button>
          <p>
            By signing up, you agree to our <a href="./">Terms of Use</a> and{" "}
            <a href="./">Privacy Policy</a>.
          </p>
          <hr></hr>
          <p>
            Already have an account? <a href="./">Log in</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
