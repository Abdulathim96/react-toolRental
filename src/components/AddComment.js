import { SkateboardingSharp } from "@mui/icons-material"
import { useContext } from "react"
import { Col, Form, Button, Row } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function AddComment(props) {
  const { addComments } = useContext(ToolRentelContext)
  const { offerId } = props
  return (
    <div className="ms-4">
      <h1>Add Comment</h1>
      <Form className="mt-5" onSubmit={e => addComments(e, offerId)}>
        <Form.Group as={Row} className="mb-3">
          <Col md="6">
            <Form.Control as="textarea" name="comment" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-4">
          <Col>
            <Button type="submit" style={{width: "50%"}}>Add</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddComment
