import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = (event) => {
    event.preventDefault();
    signOut(auth);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link as={Link} className="navbar-brand" to="/home">
          Buraq Bike Warehouse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomLink
                to="blogs"
                className="nav-link text-dark"
                aria-current="page"
              >
                Blogs
              </CustomLink>
            </li>

            {user ? (
              <li className="nav-item">
                <CustomLink
                  to="manageitems"
                  className="nav-link text-dark"
                  aria-current="page"
                >
                  Manage Items
                </CustomLink>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li className="nav-item">
                <CustomLink
                  to="/additems"
                  className="nav-link text-dark"
                  href="#"
                >
                  Add Items
                </CustomLink>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li className="nav-item">
                <CustomLink
                  to="/addshowroom"
                  className="nav-link text-dark"
                  href="#"
                >
                  Add Showroom
                </CustomLink>
              </li>
            ) : (
              ""
            )}

            {user ? (
              <li className="nav-item text-dark">
                <CustomLink to="/myitems" className="nav-link text-dark">
                  My Items
                </CustomLink>
              </li>
            ) : (
              ""
            )}
          </ul>
          <form className="d-flex">
            {user ? (
              <button
                className="btn btn-info text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <Link className="text-decoration-none " to="/signin">
                <button className="btn btn-info text-white">SignIn</button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
