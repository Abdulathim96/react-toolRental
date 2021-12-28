import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function MovieItem(props) {
  const { offer } = props
  return (
    <Col>
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
  )
}

export default MovieItem
