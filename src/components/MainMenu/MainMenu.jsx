

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import style from "./mainMenu.module.scss";
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
                      <Nav.Link  className={`${style["nav-link"]} d-flex align-items-center position-relative p-0 border border-1 border-primary`}
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