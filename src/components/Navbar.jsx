import { Button } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/Firebase";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbarDiv">
      <nav className="navbar text-decoration-none   navbar-dark bg-dark">
        <Link to="/">
          <h3 className="text-white ">MOVİE APP</h3>
        </Link>
        <div className="d-flex gap-3 align-items-center me-3">
          {currentUser ? (
            <>
              <h5 className="mb-0 text-white text-capitalize">
                {currentUser?.displayName}
              </h5>
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => logOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="ms-2 btn btn-outline-light"
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
