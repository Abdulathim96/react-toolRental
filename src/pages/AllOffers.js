import { useContext, useState } from "react"
import { Row, Button } from "react-bootstrap"
import OfferItem from "../components/OfferItem"
import ToolRentelContext from "../utils/ToolRentelContext"
import AddIcon from "@mui/icons-material/Add"
import OfferAddModal from "../components/OfferAddModal"
import { findDOMNode } from "react-dom"
import { Category } from "@mui/icons-material"
// import Sidebar from "../components/Sidebar"


function AllOffers() {
  const { offers, categorys } = useContext(ToolRentelContext)
  const [category, setCategory] = useState(null)
  const [show, setShow] = useState(false)

  let offerCategory = offers
  if (category) offerCategory = offers.filter(offer => offer.categorys.find(c => category == c.name))

  return (
    <>
      {/* <Sidebar /> */}

      <ul>
        <li onClick={() => setCategory(null)}>All</li>

        {categorys.map(cat => (
          <li onClick={() => setCategory(cat.name)}>{cat.name}</li>
        ))}
      </ul>
      <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
        <h4 className="mt-5 mb-4">All offers</h4>
        <Button style={{ marginRight: 40, marginTop: 50 }} onClick={() => setShow(true)} variant="outline-primary">
          Add Offer
          <AddIcon />
        </Button>
      </div>
      <Row md={1}>
        {offerCategory.map(offer => (
          <OfferItem offer={offer} key={offer._id} />
        ))}
      </Row>
      <OfferAddModal show={show} setShow={setShow} />
    </>
  )
}

export default AllOffers
