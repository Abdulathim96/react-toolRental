import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import ToolRentelContext from "../utils/ToolRentelContext"

function OneRequest() {
  const { requestId } = useParams()
  const { requests, likeRequest, profile } = useContext(ToolRentelContext)

  if (!profile || requests.length === 0) return <h1>Loading...</h1>

  const request = requests.find(request => request._id === requestId)


  return (
    <>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${request.poster}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <img variant="top" src={request.poster} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>{request.title}</h1>
          <div className="mb-2">
            {request.categorys.map(category => (
              <span>{category.name}</span>
            ))}
          </div>

          <h3>Overview</h3>
          <p>{request.description}</p>
        </Col>
      </Row>
      {localStorage.tokenOffers ? (
        <>
          <Row className="mt-5">
            <h3>Comments</h3>

            {request.comments.map(comment => (
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
        
        </>
      ) : null}
    </>
  )
}

export default OneRequest
