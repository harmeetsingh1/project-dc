import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Container} from "react-bootstrap";
import './Details.css'
import { Link } from "react-router-dom";
import {Table} from "react-bootstrap";

function Details() {
  return (
    <>
    <Container className="mid">
        <Navbar.Brand as={Link} to="/" className="pts">
      <Container className="secc">      
    <svg className="pts2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
</Container>
</Navbar.Brand>

<h5 className="top1">Checkout</h5>

</Container>

<Container>
    <h6 className="pu">PICK UP</h6>
    <hr />
</Container>

<Container>
    <h6 className="pu1">Test <br /> Daalchini Office Noida Uttar Pradesh <br /></h6>
    <h6 className="pu2">Order Expires in 30 minutes</h6>
    <hr />
</Container>

<Container>
    <h6 className="pu">CART DETAILS</h6>
    <hr />
</Container>

<Container>
    <Table className="fon1">
          
          <tr className="vari">
          
          <td>Item</td>
          <td>Qty</td>
          <td>Amount</td>
        </tr>

        <tr>
          
          <td>Moms Style Parantha</td>
          <td>
          
                            <button
                              type="button"
                              
                              className="btn btnn"
                            >
                              ADD
                            </button>
                         
          </td>
          <td>₹ 1</td>
        </tr>
       
    </Table>
    <hr />
</Container>



<Container>
    <Table  hover size="sm" className="fon2">
         
          <tr>
           <td>Total</td>
          <td colSpan={2}></td>
          <td>₹ 1</td>
        </tr>
       
        
    </Table>
</Container>


    
    </>
  );
}

export default Details;
