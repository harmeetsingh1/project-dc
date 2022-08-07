import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Topbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import OffCanvasExample from "./OffCanvasExample";
import "./OffCanvasExample";
import { useSelector } from "react-redux";
import OffCanvasExample2 from "./OffCanvasExample2";
import { Link } from "react-router-dom";
function Topbar() {


  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);
  
  return (
    <>
      <Navbar fixed="bottom" className="navv NonOpaue">
        <Container>
          <OffCanvasExample />
        </Container>

        <Container>
          <Container className="cont">
            {/* <Navbar.Brand class="cu">Continue</Navbar.Brand> */}
            <OffCanvasExample2 />
          </Container>
        </Container>

        <Container>
          <Container className="cont1">
          <Navbar.Brand className="cb1" as={Link} to="/details">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
            </Navbar.Brand>
           
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
