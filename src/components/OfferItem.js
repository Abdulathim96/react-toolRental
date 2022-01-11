import { useState, useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import ToolRentelContext from "../utils/ToolRentelContext"
import OfferEditModal from "./OfferEditModal"
import OfferDeleteModal from "./OfferDeleteModal"

function OfferItem(props) {
  const { offer, inProfile } = props
  const { deleteOffer } = useContext(ToolRentelContext)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <body style={{ background: "#eee"}}>
      <div class=" mt-3 mb-5 "  style={{marginLeft:130,marginRight:70}}>
        <div class="d-flex justify-content-end row me-2">
          <div class="col-md-10">
            <div class="row p-2 bg-white border rounded">
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
                <h5 style={{ fonteight: "400" }}>{offer.title}</h5>
                <div class="mt-1 mb-1 spec-1" style={{ color: "#938787", fontSize: "15px" }}>
                  <span>{offer.description}</span>
                </div>
                <p class="text-justify text-truncate para mb-0" style={{ fontSize: "16px" }}>
                  {offer.phoneNumber}
                </p>
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
                  <div class="d-flex flex-column mt-4">
                    <Link to={`/offer/${offer._id}`}>
                    <button className="btn btn-outline-primary btn-sm mt-2 btn btn-link" type="button" style={{
                      marginTop: "20px",

                      
                    }}>
                      view
                    </button>
                    </Link>
                    <button
                      class="btn btn-outline-primary btn-sm mt-2"
                      type="button"
                      // style={
                      //   {
                      //     backgroundColor: "rgb(255, 201, 0)",
                      //     Color: "black",
                      //     borderColor: "rgb(255, 201, 0)",
                      //   }
                      // }
                    >
                      message
                    </button>
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