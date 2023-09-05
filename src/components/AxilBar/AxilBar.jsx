import React from "react";
import style from "./axilBar.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const AxilBar = () => {
  return (
    <React.Fragment>
      <Container className="my-2 px-2">
        <Row className="align-items-center m-0">
          <Col className="p-0">
            <Row
              sm="auto"
              className=" border-success column-gap-3 align-items-center mx-0"
            >
              {[...Array(2).keys()].map((_, i) => (
                <div className="p-0 m-0 bottom-0">
                  <button
                    as="button"
                    key={i++}
                    className={`btn btn-sm border-0 ${style["dropdown-toggle"]}`}
                  >
                    English
                    bu;tton
                  </button>
                  <ul className="p-0 m-0 d-none"></ul>
                </div>
              ))}
            </Row>
          </Col>
          <Col>
            {/* <Row
              sm="auto"
              className=" border-warning column-gap-3 justify-content-end"
            >
              {[...Array(3).keys()].map((_, i) => (
                <Col
                  as="button"
                  key={i++}
                  className=""
                >
                  Help
                </Col>
              ))}
            </Row> */}
          </Col>
        </Row>
      </Container>

      {/* <Container
        className="bg-info mt-5"
        fluid="md"
      >
        <Row>
          <Col className="border border-black border-3  ">1 of 3</Col>
          <Col
            className="border border-black border-3  "
            xs
            md="auto"
          >
            Variable width content
          </Col>
          <Col
            className="border border-black border-3  "
            xs
            lg={2}
          >
            3 of 3
          </Col>
        </Row>
      </Container> */}
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
