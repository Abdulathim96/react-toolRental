import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import ToolRentelContext from "../utils/ToolRentelContext"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import AddComment from "../components/AddComment"
import "./OneOffer.css"

function OneOffer() {
  const { offerId } = useParams()
  const { offers, profile } = useContext(ToolRentelContext)

  if (offers.length === 0) return <h1>Loading...</h1>

  const offer = offers.find(offer => offer._id === offerId)

  return (
    <>
      <body>
        <div class="body">
        <div class="wrap"/>
        <div class="blog" >
          <div class="conteudo" >
            <div class="post-info">{offer.title}</div>
            <img src={offer.photo}/>
            <h1> {offer.title} </h1>
            <hr/>
            <p>{offer.description}</p>
          </div>
        {localStorage.tokenOffers ? (
          <>
            <Row className="mt-5">
              <h3>Comments</h3>

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
        </div>
        </div>
      </body>
    </>
  )
}

export default OneOffer
