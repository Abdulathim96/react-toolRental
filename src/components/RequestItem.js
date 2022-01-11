import { useState } from "react"
import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function MovieItem(props) {
  const { request , inProfile } = props
  


  return (
    <body style={{ background: "#eee" }}>
      <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
          <div class="col-md-10">
            <div class="row p-2 bg-white border rounded">
              <div class="col-md-3 mt-1">
                <Link to={`/request/${request._id}`}>
                  <img
                    class="img-fluid img-responsive rounded product-image"
                    style={{ width: "100%" }}
                    src={request.photo}
                  />
                </Link>
              </div>
              <div class="col-md-6 mt-1">
                <h5 style={{fonteight: "400"}}>{request.title}</h5>
                <div class="mt-1 mb-1 spec-1" style={{color: "#938787", fontSize: "15px"}}>
                  <span>{request.description}</span>
                </div>
                <p class="text-justify text-truncate para mb-0" style={{fontSize: "16px"}}>{request.phoneNumber}</p>
              </div>
              <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                <div class="d-flex flex-row align-items-center">
                  <p class="mr-1">.</p>
                </div>
                <div class="d-flex flex-column mt-4">
                  <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                    view
                  </button>
                  <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                    message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default MovieItem