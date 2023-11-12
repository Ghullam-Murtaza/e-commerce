













import React from 'react';
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import style from "./axilbar.module.scss";
import { axilMainData, axilDropdownMenuData } from '../../data/data';


// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    onClick={(e) => {
      onClick(e);
    }}
    size="sm"
    className={`${style["axil-dropdown-toggle"]} border-0 d-flex align-items-center bg-transparent`}
  >
    {children}

  </Button>
));

const AxilBar = () => {

 return (
    <React.Fragment>
      <Container className={`${style["axil-bar"]} p-2 border`}>
        <Row className="align-items-center m-0">
          {/* AxilBar's Dropdown Column */}
          <Col className="p-0">
            <Row
              sm="auto"
              className=" border-success column-gap-3 align-items-center mx-0"
            >
              {[...axilMainData.slice(0, 2)].map((axilMainItem, indexMain) => (
                  // AxilBar's Dropdown
                  <Dropdown className={`${style["axil-dropdown"]} p-0`} key={indexMain++}>
                    {/* AxilBar's Dropdown Toggle 'Button' */}
                    <Dropdown.Toggle 
                      as={CustomToggle} id="dropdown-custom-components">

                      {axilMainItem}
                    </Dropdown.Toggle>

                    {/* AxilBar's Dropdown 'Menus' */}
                      <Dropdown.Menu className={`${style["axil-dropdown-menu"]} border-0`}>
                        {axilDropdownMenuData[indexMain].map((axilDropdownMenuItem, indexDropdownMenu) => (
                          // AxilBar's Dropdown 'Items'
                          <Dropdown.Item className={`${style["axil-dropdown-item"]}`} eventKey={indexDropdownMenu+1} key={indexDropdownMenu++}>

                            {axilDropdownMenuItem}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                  </Dropdown>

                ))}
            </Row>
          </Col>

          {/* AxilBar's 2nd Column */}
          <Col className="p-0">
            <Row
              sm="auto"
              className={`${style["axil-right-column"]} border-1 border-success align-items-center justify-content-end mx-0`}
            >
              {[...axilMainData.slice(2)].map((axilMainItem, indexMain) => (
                  // AxilBar's Right Side Links
                  <Button    
                    key={indexMain++}
                    as="a"   
                    href="#"           
                    size="sm"
                    className={`${style["axil-link"]} border-0 p-0 bg-transparent`}
                  >
                    {axilMainItem}

                  </Button>

                ))}
            </Row>
          </Col>
        </Row>
      </Container>



      {/* Note:
          fluid='md' does not mean that the Container will become Fluid at 'md' breakpoint but it will become non-fluid (
          with responsive pixel width) at that breakpoint as it's 'media-query' or 'breakpoint' funtionality works quite 
          opposite of the Vanilla Bootsrap's class '.container-md' (that makes the Container Non-Fluid at 'md' breakpoint and
          before that breakpoint the Container is Fluid without declaring it to be fluid as 'Block Elements' have their
          default 'Widths' set to '100%')

          'xs' class:
            when you give a breakpoint attribute let say 'lg', then always add 'xs' breakpoint attribute or any other smaller one
            to make the 'Col' behave normally (as an 'auto layout column') otherwise this 'Col' will act as it has assigned a 
            column width of '12 columns' on all smaller breakpoints until that 'lg' breakpoint is reached. It's like the
            'auto layout width' feature of columns is disabled whenever a 'breakpoint' prop is given to the 'Col' component, so we
            need to make it 'true'.

          'font-size':
            there is no Bootstrap Class to make the font-size smaller than normal (16px or 1rem).
          
          'Row's column widths':
          1) Column Widths given to Row component specifies the No. of Columns to fit next to each other in that particular Row.
            And these no. of columns are only useful if all the 'Col' components inside that 'Row' have the same width or same column
            span, otherwise if you change the column span of 'Col' component, the no. of columns spanned are out of '12' columns and
            not from the column width specified to 'Row' component (let say <Row sm={4}>).
          2) And the column width specified to the nested 'Row' (Row inside a Col) has a working range of (1 to 6 and not 1 to 12).
          
      */}
    </React.Fragment>
  );
};
export default AxilBar;
