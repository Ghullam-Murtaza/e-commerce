import React from 'react'
import style from './axilBar.module.scss'
import {Container, Row, Col} from 'react-bootstrap'

const AxilBar = () => {
  return (
    <React.Fragment>
      <div>
        <ul>
          <li>English</li>
          <li>USD</li>
          <li>Help</li>
          <li>Join Us</li>
          <li>Sign In</li>
        </ul>
      </div>
      
      <Container className='bg-primary' fluid='md'>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      {/* Note:
          fluid='md' does not mean that the Container will become Fluid at 'md' breakpoint but it will become non-fluid (
          with responsive pixel width) at that breakpoint as it's 'media-query' or 'breakpoint' funtionality works quite 
          opposite of the Vanilla Bootsrap's class '.container-md' (that makes the Container Non-Fluid at 'md' breakpoint and
          before that breakpoint the Container is Fluid without declaring it to be fluid as 'Block Elements' have their
          default 'Widths' set to '100%')
      */}
    </ React.Fragment>
    
  )
}
export default AxilBar