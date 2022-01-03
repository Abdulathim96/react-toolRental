// import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
// import FilmsContext from "../utils/FilmsContext"

function OfferList(props) {
  const { listTitle } = props
  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">{listTitle}</h4>
      </Row>
      <Row>
        <Col key={offer._id}>
          <Card border="light" style={{ maxWidth: "200px" }}>
            <Link to={`/offer/${offer._id}`}>
              <Card.Img variant="top" src={offer.photo} height="220px" style={{ borderRadius: "10px" }} />
            </Link>
            <Card.Body>
              <Link to={`/offer/${offer._id}`} className="text-black" style={{ textDecoration: "none" }}>
                <Card.Title>{offer.title}</Card.Title>
              </Link>
              <Card.Text className="text-muted">{offer.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default MovieList
