import React from "react";
import "./signup.scss";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup">
      <div className="signup_container">
        <div className="login_content">
          <h1>Signup</h1>
          <form>
            <input type="text" required placeholder="Your Full Name" />
            <input type="email" required placeholder="Your Email Address" />
            <input type="password" required placeholder="Set Your Password" />
            <input type="password" required placeholder="Confirm Password" />
            <div className="l_activity">
              <div className="la_con">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
            </div>
            <button>Signup</button>
          </form>
          <p className="not_regiter_text">
            Already registered?{" "}
            <Link to="/login" className="Link">
              <span>Login</span>
            </Link>{" "}
            using email
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
