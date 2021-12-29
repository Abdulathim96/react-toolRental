import { useContext, useState } from "react"
import { Row, Button } from "react-bootstrap"
import OfferItem from "../components/OfferItem"
import ToolRentelContext from "../utils/ToolRentelContext"
import AddIcon from "@mui/icons-material/Add"
import OfferAddModal from "../components/OfferAddModal"

function AllOffers() {
  const { offers } = useContext(ToolRentelContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
        <h4 className="mt-5 mb-4">All offers</h4>
        <Button style={{ marginRight: 40, marginTop: 50 }} onClick={() => setShow(true)} variant="outline-primary">
          Add Offer<AddIcon />
        </Button>
      </div>
      <Row md={1}>
        {offers.map(offer => (
          <OfferItem offer={offer} key={offer._id} />
        ))}
      </Row>
      <OfferAddModal show={show} setShow={setShow} />
    </>
  )
}

export default AllOffers
