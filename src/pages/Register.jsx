import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/Firebase";

const Register = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const displayName = `${firstname} ${lastname}`;
    e.preventDefault();
    createUser(email, password, navigate, displayName);
  };

  return (
    <div>
      <div className="mt-5">
        <h1 className="text-primary text-center">Register</h1>
        <form className="container w-25 " onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label fw-bold  fs-4 ">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              aria-describedby="emailHelp"
              value={firstname || ""}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label fw-bold   fs-4 ">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              value={lastname || ""}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label fw-bold  fs-4 ">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold fs-4 ">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
