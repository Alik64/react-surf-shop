import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../actions/userActions";
import "./Header.css";
export default function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div className="header">
      <div className="row">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className="logo"
            style={{ maxWidth: " 12rem " }}
          />
        </Link>
      </div>
      <div className="nav_client">
        <Link to="/cart">
          <i class="fas fa-shopping-cart"></i>
          {cartItems.length > 0 && (
            <span className="badge"> {cartItems.length} </span>
          )}
        </Link>

        {userInfo ? (
          <div className="dropdown">
            <Link to="#">
              {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="#signout" onClick={signoutHandler}>
                  Deconnexion
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/signin">Mon compte</Link>
        )}
      </div>
    </div>
  );
}
