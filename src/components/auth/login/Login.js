import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_content">
          <h1>Login</h1>
          <div className="l_social_heading">
            <span></span>
            <p>Login with social</p>
            <span></span>
          </div>
          <div className="l_social_button">
            <button>Google</button>
            <button>Facebook</button>
          </div>
          <div className="l_with_email_heading">
            <span></span>
            <p>Or login with email</p>
            <span></span>
          </div>
          <form>
            <input type="email" required placeholder="Your Email Address" />
            <input type="password" required placeholder="Your Password" />
            <div className="l_activity">
              <div className="la_con">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p className="for-pass">Forgot Password?</p>
            </div>
            <button>Login</button>
          </form>
          <p className="not_regiter_text">
            Not register yet?{" "}
            <Link to="/signup" className="Link">
              <span> Sign up</span>
            </Link>{" "}
            using email
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
