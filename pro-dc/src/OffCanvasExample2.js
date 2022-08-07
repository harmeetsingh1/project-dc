import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { COffcanvas } from "@coreui/react";
import { COffcanvasBody } from "@coreui/react";
import { COffcanvasHeader } from "@coreui/react";
import {
  COffcanvasTitle,
  CButton,
  CCloseButton,
  CContainer,
} from "@coreui/react";
import "./OffCanvasExample.css";
import "./Topbar.css";
import './OffCanvasExample2.css'
import './OffCanvasExample.css'
import { Container } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function OffCanvasExample2() {
  
    const [visible, setVisible] = useState(false);
  return (
    <>
     <CButton className='ofcs' onClick={() => setVisible(true)}>Continue</CButton>
    <COffcanvas placement="bottom" visible={visible} onHide={() => setVisible(false)}>
      <COffcanvasHeader>
        <Container className="btwn">
        <COffcanvasTitle class='dm1'>Login</COffcanvasTitle>
        </Container>
        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
      </COffcanvasHeader>
      <COffcanvasBody>
        <Container className='log'>
        <InputGroup className="mb-3">
        {/* <InputGroup.Text id="inputGroup-sizing-default">
          Default
        </InputGroup.Text> */}
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Enter Your Phone Number"
        />
      </InputGroup>
        </Container>
       
       
        <Container className='but'>
        <div className="d-grid gap-2">
        <Button className='btns' variant="primary" size="md">
         SUBMIT
        </Button>
        </div>
      </Container>

      <h6 className="wdl">Will do it later</h6>
      </COffcanvasBody>
    </COffcanvas>
    </>
  );
}

export default OffCanvasExample2;
