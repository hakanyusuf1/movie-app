import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../auth/Firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail();
    setPassword();
    signIn(email, password, navigate);

    console.log("email :>> ", email);
    console.log("password :>> ", password);
  };

  return (
    <div
      className="login"
      style={{
        backgroundColor: "Red",
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor: "Yellow",
          width: "50%",
          height: "94vh",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="https://picsum.photos/1920/1080"
          alt=""
        />
      </div>
      <div
        style={{
          background: "linear-gradient(#e66465, #9198e5)",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "94vh",
        }}
      >
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              className="form-control w-100"
              id="email"
              placeholder="Enter your email adress.."
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password || ""}
              id="password"
              placeholder="Enter your password.."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="link">Forgot Password?</div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
