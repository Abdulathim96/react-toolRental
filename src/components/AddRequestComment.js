import { SkateboardingSharp } from "@mui/icons-material"
import { useContext } from "react"
import { Col, Form, Button, Row } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function AddRequestComment(props) {
  const { addRequestComments } = useContext(ToolRentelContext)
  const { requestId } = props
  return (
    <div className="ms-4">
      <h1>Add RequestComment</h1>
      <Form className="mt-5" onSubmit={e => addRequestComments(e, requestId)}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            RequestComment
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="requestcomment" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Add</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddRequestComment
