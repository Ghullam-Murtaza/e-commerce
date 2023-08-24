import React from 'react'
import style from './axilBar.module.scss'
import {Container, Row, Col} from 'react-bootstrap'

const AxilBar = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col>
            <Row className='border border-success border-3'>
              <Col xs={3}>English</Col>
              <Col xs={3}>USD</Col>
            </Row>
          </Col>
          <Col>
            <Row className='border border-warning border-3'>
              <Col  xs={3}>Help</Col>
              <Col  xs={3}>Join Us</Col>
              <Col xs={3}>Sign In</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
      <Container className='bg-info mt-5' fluid='md'>
        <Row>
          <Col className='border border-black border-3  '>1 of 3</Col>
          <Col className='border border-black border-3  ' xs md="auto">Variable width content</Col>
          <Col className='border border-black border-3  ' xs lg={2}>3 of 3</Col>
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
      */}
    </ React.Fragment>
    
  )
}
export default AxilBar