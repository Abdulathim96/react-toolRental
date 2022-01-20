import { useState, useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import ToolRentelContext from "../utils/ToolRentelContext"
import OfferEditModal from "./OfferEditModal"
import OfferDeleteModal from "./OfferDeleteModal"
import { Container } from "@mui/material"

function OfferItem(props) {
  const { offer, inProfile } = props
  const { deleteOffer } = useContext(ToolRentelContext)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <body style={{ background: "rgb(248, 248, 248)" }}>
      <div class="container mt-2 mb-1 ">
        <div class="d-flex justify-content-center row">
          <div class="col-md-10">
            <div class="row p-2 bg-white border rounded">
              <small>Offer!</small>
              <div class="col-md-3 mt-1">
                <Link to={`/offer/${offer._id}`}>
                  <img
                    class="img-fluid img-responsive rounded product-image"
                    style={{ width: "100%" }}
                    src={offer.photo}
                  />
                </Link>
              </div>

              <div class="col-md-6 mt-1">
                {offer.available == false ? (
                  <>
                    <h5 style={{ fonteight: "400" }}>{offer.title}</h5>
                    <p style={{ color: "red" }}>not available </p>
                    <div class="mt-1 mb-1 spec-1" style={{ color: "#938787", fontSize: "15px" }}>
                      <span>{offer.description}</span>
                    </div>
                    <p class="text-justify text-truncate para mb-0" style={{ fontSize: "16px" }}>
                      {offer.phoneNumber}
                    </p>
                  </>
                ) : (
                  <>
                    <h5 style={{ fonteight: "400" }}>{offer.title}</h5>
                    <div class="mt-1 mb-1 spec-1" style={{ color: "#938787", fontSize: "15px" }}>
                      <span>{offer.description}</span>
                    </div>
                    <p class="text-justify text-truncate para mb-0" style={{ fontSize: "16px" }}>
                      {offer.phoneNumber}
                    </p>
                  </>
                )}
              </div>
              <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                <div class="d-flex flex-row align-items-center">
                  <p class="mr-1">{offer.price}$ for one Day</p>
                </div>
                {inProfile ? (
                  <div class="d-flex flex-column mt-4">
                    <button class="btn btn-outline-primary btn-sm mt-2" type="button" onClick={() => setEditShow(true)}>
                      Edit
                    </button>

                    <button class="btn btn-outline-primary btn-sm mt-2" onClick={() => deleteOffer(offer._id)}>
                      Delete
                    </button>
                    <OfferEditModal show={editShow} setShow={setEditShow} offer={offer} />
                    <OfferDeleteModal show={deleteShow} setShow={setDeleteShow} offerId={offer._id} />
                  </div>
                ) : (
                  <div>
                    <Link to={`/offer/${offer._id}`} style={{ textDecoration: "none" }}>
                      <Button
                        variant="outline-primary"
                        style={{
                          marginTop: "20px",
                          padding: "3px 60px",
                        }}
                      >
                        view
                      </Button>
                    </Link>
                    <Link to={`/message/${offer.owner._id}`} style={{ textDecoration: "none" }}>
                      <Button
                        variant="outline-primary"
                        style={{
                          marginTop: "20px",
                          padding: "3px 43px",
                        }}
                      >
                        message
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default OfferItem
