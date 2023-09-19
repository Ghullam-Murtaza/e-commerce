


import React from 'react';
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
                <Nav className="">
                  <Nav.Item>
                    {/* Main Nav's 'Items' */}
                      {mainNavData.map((mainNavItem, i) => (
                        <Nav.Link href="#action1" key={i++}>{mainNavItem}</Nav.Link>
                        // Main Nav's 'Sub Menus'
                        {mainNavSubMenuData[mainNavItem]?.map((mainNavSubMenuItem, i) => (
                          <Nav className="flex-column" key={i++}>
                            <Nav.Link href="#action1">{mainNavSubMenuItem}</Nav.Link>
                          </Nav>
                        ))}

                      ))}
                    </Nav.Item>
                  
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