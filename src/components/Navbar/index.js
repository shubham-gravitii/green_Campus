import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import logo from "../../assets/images/logo-no-background.png";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import SideMenuImg from "../../assets/images/side-menu.png";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
const Navbar = () => {
  const newRef = useRef(null);

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSidebarExpanded, setisSidebarExpanded] = useState(false);
  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setisSidebarExpanded(!setisSidebarExpanded);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        // <div className={isNavExpanded ? "menuNav expanded" : "menuNav"}>
        //   <div className={isMenuClicked ? "menu-icon-close" : "menu-icon-open"}>
        //     <ul className=" ">
        //       <Link to="/">
        //         <li>Home</li>
        //       </Link>
        //       <a href="/calculator">
        //         <li>Footprint Calculator</li>
        //       </a>
        //       <a href="/myfootprint">
        //         <li>My Footprint</li>
        //       </a>
        //       {/* <a href="/mypledges">
        //         <li>My Pledges</li>
        //       </a> */}
        //       {/* <a href="/donation">
        //         <li>Want To Do More?</li>
        //       </a> */}
        //       <a href="/about">
        //         <li>About</li>
        //       </a>
        //       <a href="/" onClick={() => Auth.logout()}>
        //         <li>Logout</li>
        //       </a>
        //     </ul>
        //   </div>
        // </div>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem
            component={<Link to="/" />}
            onClick={() => {
              setisSidebarExpanded(false);
            }}
          >
            {" "}
            Home
          </MenuItem>
          <MenuItem
            component={<Link to="/calculator" />}
            onClick={() => {
              setisSidebarExpanded(false);
            }}
          >
            {" "}
            Footprint Calculator
          </MenuItem>
          <MenuItem
            component={<Link to="/myfootprint" />}
            onClick={() => {
              setisSidebarExpanded(false);
            }}
          >
            {" "}
            My Footprint
          </MenuItem>
          <MenuItem
            component={<Link to="/about" />}
            onClick={() => {
              setisSidebarExpanded(false);
            }}
          >
            {" "}
            About
          </MenuItem>
          <MenuItem
            component={<Link to="/" />}
            onClick={() => {
              Auth.logout();
              setisSidebarExpanded(false);
            }}
          >
            {" "}
            Logout
          </MenuItem>
        </Menu>
      );
    } else {
      return (
        // <div className={isNavExpanded ? "menuNav expanded" : "menuNav"}>
        //   <div className={isMenuClicked ? "menu-icon-close" : "menu-icon-open"}>
        //     <ul className="">
        //       <Link to="/">
        //         <li>Home</li>
        //       </Link>
        //       <Link to="/about">
        //         <li>About</li>
        //       </Link>
        //       <Link to="/login">
        //         <li>Log In</li>
        //       </Link>
        //       <Link to="/signup">
        //         <li>Sign Up</li>
        //       </Link>
        //     </ul>
        //   </div>
        // </div>

        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem
            component={<Link to="/" />}
            onClick={() => {
              setisSidebarExpanded(false);
            }}
          >
            {" "}
            Home
          </MenuItem>
          <MenuItem
            component={<Link to="/about" />}
            onClick={() => {
              setisSidebarExpanded(false);
            }}
          >
            {" "}
            About
          </MenuItem>
          <MenuItem
            component={<Link to="/login" />}
            onClick={() => {
              setisSidebarExpanded(false);
            }}
          >
            {" "}
            Login
          </MenuItem>
          <MenuItem
            component={<Link to="/signup" />}
            onClick={() => {
              setisSidebarExpanded(false);
            }}
          >
            {" "}
            Sign Up
          </MenuItem>
        </Menu>
      );
    }
  }

  return (
    <nav className="navBar  flex justify-between" id="navbarID">
      <Link to="/" className="brand-name">
        <img
          src={logo}
          alt="logo of foot outline with the earth inside of it"
          className="navLogo"
        />
      </Link>

      <div
        className="sidebarParent "
        style={{ borderRadius: "5px" }}
        ref={newRef}
      >
        <div
          className={`sideImg ${isSidebarExpanded ? "hidden" : ""}`}
          onClick={() => {
            setisSidebarExpanded(!isSidebarExpanded);
            console.log(isSidebarExpanded);
          }}
        >
          <img src={SideMenuImg} alt="" className="hamburger" />
        </div>
        <Sidebar
          className={`${isSidebarExpanded ? "" : "hidden"} `}
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              
            },
            
          }}
        >
          {showNavigation()}
        </Sidebar>
      </div>
    </nav>
  );
};

export default Navbar;
