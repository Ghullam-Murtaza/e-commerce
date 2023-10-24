









import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import style from "./mainMenu.module.scss";
// import "./style.css";
import { logoDark, logoLight } from "../../assets/images/images"
import { mainNavData, mainNavSubMenuData } from '../../data/data';

const MainMenu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  return (
    <React.Fragment>
      <Container className=" border-dark">
        <Navbar expand="lg" className={`${style["navbar"]} border border-dark`}>
          {/* <Container> */}
          {/* Logo */}
            <div>
              {/* logo dark */}
              <Navbar.Brand href="#" className={`${style["logo"]} d-block m-0`}>
                <img src={logoDark} alt="logo" className={` `}/>
              </Navbar.Brand>
              {/* logo light */}
              <Navbar.Brand href="#" className={`${style["logo"]} d-none m-0`}>
                <img src={logoLight} alt="logo" />
              </Navbar.Brand>
            </div>

            {/* Middle Links */}
            <Navbar.Offcanvas
              id={"offcanvasNavbar-expand-lg"}
              aria-labelledby={"offcanvasNavbarLabel-expand-lg"}
              placement="end"
            >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={"offcanvasNavbarLabel-expand-lg"}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>

                {/* Main Nav */}
                <Nav className={`${style["main-nav"]}`}>
                  
                  {mainNavData.map((mainNavItem, indexNav) => (
                    // Main Nav's 'Items'
                    <Nav.Item className={`${style["nav-item"]} position-relative  border-1 border-black`}
                      onMouseEnter={() => (setActiveSubMenu(indexNav))}
                      onMouseLeave={() => (setActiveSubMenu())}
                    >
                      {/* Main Nav's 'Links' */}

                      {/* only 'nav-items' that have 'submenus' will have a 'chevron-icon' next to their 'nav-link' */}
                      <Nav.Link  className={`${mainNavSubMenuData[mainNavItem] && style["nav-link-with-chevron"]} ${style["nav-link"]}
                                             d-flex align-items-center position-relative p-0 border-1 border-primary`}
                        href="#action1" key={indexNav++}
                      >
                        {mainNavItem}
                      </Nav.Link>

                      <React.Fragment> {/* 1) Added React.Fragment to Wrap the returned JSX because returning JSX without a Parent is invalid
                                           and it will give the Error: Unxpected token '{' while ',' is expected. 2) This Error can also occur
                                           when using '{}' brackets for Comments that are placed in the 'return' statement of some 'Condition'
                                           or inside the Callback Function of some 'map' Method. So instead use '//' for Comments in there. */}

                        {/* Show 'Main Nav's Sub Menu' when you Hover over a 'Main Nav's Item' */}

                        {/* it will return true by evaluating from left to right until some expression evaluates to false. And parentheses are
                            not necessary */}
                        {/* Checking whether or not this is the 'Nav Item' that has been Hovered over and this 'Nav Item' has a 'Sub Menu' */}
                        {(activeSubMenu === indexNav && mainNavSubMenuData[mainNavItem]) && (
                          
                          // Main Nav's 'Sub Menus'
                          <Nav className={`${style["nav-sub-menu"]} flex-column rounded-1 position-absolute top-100 start-0 `}>
                            
                            {mainNavSubMenuData[mainNavItem]?.map((mainNavSubMenuItem, indexSubMenu) => (
                              
                              // Main Nav's 'Sub Menus Links'
                              <Nav.Link className={`d-block rounded-1 overflow-hidden`} href="#action1" key={indexSubMenu++}>
                                {mainNavSubMenuItem}
                              </Nav.Link>

                            ))}
                          </Nav>

                        )}

                      </React.Fragment>
                    </Nav.Item>

                  ))}
                {/* ${activeSubMenu ? "d-flex" : "d-none"} */}
                {/* flex-column rounded-1 position-absolute top-100 start-0 */}
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            



            {/* Right Side 'Action List' */}



            <ul className="right-action-list">
              <li className="axil-search">
                <a href="javascript:void(0)" className="header-search-icon" title="Search">
                    <i className="flaticon-magnifying-glass"></i>
                </a>
              </li>
              <li className="wishlist">
                <a href="wishlist.html">
                  <i className="flaticon-heart"></i>
                </a>
              </li>
              <li className="shopping-cart">
                <a href="#" className="cart-dropdown-btn">
                  <span className="cart-count">3</span>
                  <i className="flaticon-shopping-cart"></i>
                </a>
              </li>
              <li className="my-account">
                <a href="javascript:void(0)" className="open">
                  <i className="flaticon-person"></i>
                </a>
                {/* <div className="my-account-dropdown open">
                  <span className="title">QUICKLINKS</span>
                  <ul>
                    <li>
                        <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                        <a href="#">Initiate return</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Language</a>
                    </li>
                  </ul>
                  <div className="login-btn">
                    <a href="sign-in.html" className="axil-btn btn-bg-primary">Login</a>
                  </div>
                  <div className="reg-footer text-center">No account yet? <a href="sign-up.html" className="btn-link">REGISTER HERE.</a></div>
                </div> */}
              </li>

              {/* <li className="axil-mobile-toggle">
                <button className="menu-btn mobile-nav-toggler">
                  <i className="flaticon-menu-2"></i>
                </button>
              </li> */}
            </ul>










              
              {/* Right Side 'Action List' */}
            {/* <Nav className={`${style["nav-sub-menu"]} flex-column rounded-1 position-absolute top-100 start-0 `}>
              
              {[...Array(4).keys()].map((_, i) => (
                
                // Right Side 'Action List Items'
                <Nav.Link className={`d-block rounded-1 overflow-hidden`} href="#action1" key={i++}>
                  {i}
                </Nav.Link>

              ))}
            </Nav> */}
            
            {/* ))} */}
            













             {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-lg"} />
          {/* </Container> */}
        </Navbar>
      </Container>
    
    </React.Fragment>
  )
}
export default MainMenu
