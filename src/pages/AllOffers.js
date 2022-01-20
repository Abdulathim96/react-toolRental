import { useContext, useEffect, useState } from "react"
import { Row, Button, Form } from "react-bootstrap"
import OfferItem from "../components/OfferItem"
import ToolRentelContext from "../utils/ToolRentelContext"
import AddIcon from "@mui/icons-material/Add"
import OfferAddModal from "../components/OfferAddModal"
import { findDOMNode } from "react-dom"
import { Category } from "@mui/icons-material"
import { useSearchParams } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function AllOffers() {
  const { offers, categorys, subCategorys } = useContext(ToolRentelContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const queryCat = searchParams.get("cat")
  const [category, setCategory] = useState(queryCat || null)
  const [show, setShow] = useState(false)

  let offerCategory = offers
  if (category) offerCategory = offers.filter(offer => offer.categorys.find(c => category == c.name))
  if (category && offerCategory.length === 0)
    offerCategory = offers.filter(offer => offer.subCategories.find(c => category == c.name))

  useEffect(() => {
    const queryCat = searchParams.get("cat")
    setCategory(queryCat)
  }, [searchParams])

  return (
    <>
      <body>
        <div style={{ background: "rgb(248, 248, 248)" }}>
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "rgb(248, 248, 248)",
              marginRight: 170,
            }}
          >
            <h4 className="mt-5 mb-4" style={{ marginLeft: 180 }}>
              <strong>Offers</strong>
            </h4>
            <Button
              style={{ marginRight: 40, marginTop: 50, marginBottom: 10 }}
              onClick={() => setShow(true)}
              variant="outline-primary"
            >
              Add Offer
              <AddIcon />
            </Button>
          </div>
        </div>
        {/* <hr /> */}
        <Row md={1}>
          {offerCategory.map(offer => (
            <OfferItem offer={offer} key={offer._id} />
          ))}
        </Row>
        <OfferAddModal show={show} setShow={setShow} />
      </body>
    </>
  )
}

export default AllOffers
