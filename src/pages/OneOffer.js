import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import ToolRentelContext from "../utils/ToolRentelContext"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import AddComment from "../components/AddComment"
// import "./OneOffer.css"

function OneOffer() {
  const { offerId } = useParams()
  const { offers, profile } = useContext(ToolRentelContext)

  if (offers.length === 0) return <h1>Loading...</h1>

  const offer = offers.find(offer => offer._id === offerId)

  return (
    <>
          <Row
        style={{
          // backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${offer.photo}")`,
          backgroundColor: "rgb(44, 52, 64)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <img variant="top" src={offer.photo} width="100%" style={{ borderRadius: "1px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>{offer.title}</h1>
          <div className="mb-2">
            {offer.categorys.map(category => (
              <span>{category.name}</span>
            ))}
          </div>

          <h3>Overview</h3>
          <p>{offer.description}</p>
        </Col>
      </Row>
        {localStorage.tokenOffers ? (
          <>
            <Row className="mt-5">
              <h3 style={{marginLeft: "20px"}}>Comments</h3>
              <hr />
              {offer.comments.map(comment => (
                <Card style={{ margin: 20, maxWidth: 1100 }}>
                  <Row>
                    <Row style={{ display: "flex", alignItems: "center" }}>
                      <Col md="1">
                        <Image style={{ clipPath: "circle()" }} src={comment.owner.avatar} width="80px" roundedCircle />
                      </Col>
                      <Col>
                        {comment.owner.firstName} {comment.owner.lastName}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={{ offset: 1 }}>{comment.comment}</Col>
                    </Row>
                  </Row>
                </Card>
              ))}
            </Row>
            <Row>
              <AddComment offerId={offer._id} />
            </Row>
          </>
        ) : null}
        
    </>
  )
}

export default OneOffer
