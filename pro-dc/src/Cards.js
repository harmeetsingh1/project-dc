import { React, useState } from "react";
import "./Cards.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { stockData } from "./data";
import OffCanvasExample from "./OffCanvasExample";
import { useDispatch } from "react-redux/es/exports";
import { ADD } from "./redux/actions/action";

function Cards() {
  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  return (
    <>
      {stockData.map((data, key) => {
        return (
          <Container>
            <div className="top" key={key}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 mt-3">
                    <div className="card">
                      <div className="card-horizontal">
                        <div className="img-square-wrapper">
                          <img
                            className="images"
                            src={data.image}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-main">{data.title}</h5>
                          <p className="card-text">{data.description}</p>
                          <h6 className="card-title">{data.price}</h6>

                          <h6 className="card-title2">{data.discprice}</h6>

                          <container className="del">
                            <button
                              type="button"
                              onClick={() => send(data)}
                              className="btn btnn"
                            >
                              ADD
                            </button>
                          </container>
                        </div>
                      </div>
                      {/* <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        );
      })}
    </>
  );
}

export default Cards;
