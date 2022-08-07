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
import { Table } from "react-bootstrap";
import { stockData } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { DLT, ADD, REMOVE } from "./redux/actions/action";
import { useNavigate, useParams } from "react-router-dom";

function OffCanvasExample() {
  const [visible, setVisible] = useState(false);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  return (
    <>
      <CButton onClick={() => setVisible(true)}>
        {getdata.length}item(s)
      </CButton>

      <div className="outer">
        <COffcanvas
          position="fixed"
          className="bot"
          placement="bottom"
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <CContainer className="dm">
              <COffcanvasTitle className="cartd">Cart Details</COffcanvasTitle>
            </CContainer>
            <CCloseButton
              className="text-reset cbt"
              onClick={() => setVisible(false)}
            />
          </COffcanvasHeader>

          <COffcanvasBody>
            <CContainer className="tabl">
              <h6 className="li">Items</h6>
              <h6 className="li ad">Qty</h6>
              <h6 className="li">Amount</h6>
            </CContainer>
            {getdata.map((e) => {
              return (
                <>
                  <CContainer className="tab2">
                    <h6 className="li">{e.title}</h6>
                    <button type="button" className="btn btnn li">
                      ADD
                    </button>
                    <h6 className="li">₹ 1</h6>
                  </CContainer>
                </>
              );
            })}

            <hr />

            <CContainer className="tab3">
              <h6 className="li fw">Total</h6>

              <h6 className="li">₹ 1</h6>
            </CContainer>
          </COffcanvasBody>
        </COffcanvas>
      </div>
    </>
  );
}

export default OffCanvasExample;
