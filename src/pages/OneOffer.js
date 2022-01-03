import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import ToolRentelContext from "../utils/ToolRentelContext"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import AddComment from "../components/AddComment"

function OneOffer() {
  const { offerId } = useParams()
  const { offers, profile } = useContext(ToolRentelContext)

  if (offers.length === 0) return <h1>Loading...</h1>

  const offer = offers.find(offer => offer._id === offerId)

  return (
    <>
      <body
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${offer.photo} ")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div class="container height-100 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div class="card" style={{ width: "380px", border: "none", borderRadius: "0px" }}>
            {" "}
            <img
              width="380"
              height="220"
              src={offer.photo}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <div class="p-3 content">
              {" "}
              <span style={{ color: "blue", fontWeight: "500" }}>{offer.title}</span>
              <h4>{offer.price} $ For a day</h4>
              <p style={{ fontSize: "13px" }}>{offer.description}</p>
            </div>
          </div>
        </div>
      </body>

      {localStorage.tokenOffers ? (
        <>
          <Row className="mt-5">
            <h3>Comments</h3>

            {offer.comments.map(comment => (
              <Card style={{ margin: 20, maxWidth: 1100 }}>
                <Row>
                  <Row style={{ display: "flex", alignItems: "center" }}>
                    <Col md="1">
                      <Image src={comment.owner.avatar} width="80px" roundedCircle />
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
