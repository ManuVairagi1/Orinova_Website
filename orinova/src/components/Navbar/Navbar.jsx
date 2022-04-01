// import React , {useState} from "react";
// import "./navbar.css";
// import

// function Navbar(props) {
//   return (
//     // <div>
//     //   <div className="navbar">
//     //     <img
//     //       src="https://orinovait.com/wp-content/uploads/2021/02/orinovait-sticky-logo.png"
//     //       alt=""
//     //     />
//     //     <ul className="navbar-contents">
//     //       <li className="navbar-content">
//     //         <a href="default.asp">Home</a>
//     //       </li>
//     //       <li className="navbar-content">
//     //         <a href="news.asp">Our Services</a>
//     //       </li>
//     //       <ul className="dropdown">
//     //         <li>
//     //           <a href="#">Digital Marketing</a>
//     //         </li>
//     //         <li>
//     //           <a href="#">Design and Development</a>
//     //         </li>
//     //         <li>
//     //           <a href="#">Social Media Marketing</a>
//     //         </li>
//     //         <li>
//     //           <a href="#">SEO consultancy</a>
//     //         </li>
//     //       </ul>
//     //       <li className="navbar-content">
//     //         <a href="contact.asp">Projects</a>
//     //       </li>
//     //       <li className="navbar-content">
//     //         <a href="about.asp">Our Team</a>
//     //       </li>
//     //       <li className="navbar-content">
//     //         <a href="contact.asp">Contact Us</a>
//     //       </li>
//     //       <li className="navbar-content">
//     //         <a href="about.asp">Blog</a>
//     //       </li>
//     //     </ul>
//     //   </div>
//     // </div>

//     <div>
//       <nav className="navbar">
//         <ul className="navbar-nav">
//           {" "}
//           <li className="navbar-content">
//             <a href="default.asp">Home</a>
//           </li>
//           <li className="navbar-content">
//             <a href="contact.asp">Projects</a>
//           </li>
//           <li className="navbar-content">
//             <a href="about.asp">Our Team</a>
//           </li>
//           <li className="navbar-content">
//             <a href="news.asp">Our Services</a>
//           </li>
//           {/* <ul className="dropdown">
//             <li>
//               <a href="#">Digital Marketing</a>
//             </li>
//             <li>
//               <a href="#">Design and Development</a>
//             </li>
//             <li>
//               <a href="#">Social Media Marketing</a>
//             </li>
//             <li>
//               <a href="#">SEO consultancy</a>
//             </li>
//           </ul> */}
//           <li className="navbar-content">
//             <a href="contact.asp">Contact Us</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

//////////////////////////////////////////////////////////////////////////
//  Navbar - with - dropdown /////

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./navbar.css";

function Navbar() {
  ///states
  const [click, setclick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  ///states

  const handleClick = () => {
    setclick(!click);
  };

  const closeMobileMenu = () => setclick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img
            src="https://orinovait.com/wp-content/uploads/2021/02/orinovait-sticky-logo.png"
            alt=""
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Our team
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Our Services <i className="fas fa-caret-down"></i>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
