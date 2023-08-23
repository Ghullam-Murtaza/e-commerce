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
    </ React.Fragment>
  )
}
export default AxilBar