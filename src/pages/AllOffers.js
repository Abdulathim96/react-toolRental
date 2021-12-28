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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Row>
        <h4 className="mt-5 mb-4">All offers</h4>
      </Row>
      <Row md={5}>
        {offers.map(offer => (
          <OfferItem offer={offer} key={offer._id} />
        ))}
      </Row>
      <OfferAddModal show={show} setShow={setShow} />
    </>
  )
}

export default AllOffers
