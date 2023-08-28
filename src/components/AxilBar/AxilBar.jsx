import React from 'react'
import style from './axilBar.module.scss'
import {Container, Row, Col} from 'react-bootstrap'

const AxilBar = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <Row sm="auto" className='border border-success border-3 column-gap-3'>
              <Col className='border border-warning border-2'>English</Col>
              <Col className='border border-warning border-2'>USD</Col>
            </Row>
          </Col>
          <Col>
            <Row className='border border-warning border-3'>
              <Col xs={2}>Help</Col>
              <Col xs={2}>Join Us</Col>
              <Col xs={2}>Sign In</Col>
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

          'font-size':
          there is no Bootstrap Class to make the font-size smaller than normal (16px or 1rem).
          
          'Row's column widths':
          1) Column Widths given to Row component specifies the No. of Columns to fit next to each other in that particular Row.
          And these no. of columns are only useful if the 'Col' components have the same width or same column span, otherwise
          if you change the column span of 'Col' component, the no. of columns spanned are out of '12' columns and not from the
          column width specified to 'Row' component (let say <Row sm={4}>).
          2) And the column width specified to the nested 'Row' (Row inside a Col) has a working range of (1 to 6 and not 1 to 12)
          may be because there are 2 'Col' in the parent 'Row', so one 'Col' gets 6 columns span and the nested 'Row' in that
          'Col' is given 6 columns to fit next to each other (as may be because there are also 2 'Col' inside that nested 'Row').
          '
      */}
    </ React.Fragment>
    
  )
}
export default AxilBar