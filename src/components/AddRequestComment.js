import { SkateboardingSharp } from "@mui/icons-material"
import { useContext } from "react"
import { Col, Form, Button, Row } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function AddRequestComment(props) {
  const { addRequestComments } = useContext(ToolRentelContext)
  const { requestId } = props
  return (
    
    <div className="ms-4">
      <Form className="mt-5" onSubmit={e => addRequestComments(e, requestId)}  style={{display:"inline"}}>
        <Form.Group as={Row} className="mb-3">
          <Col md="6">
            <Form.Label>
            <h4>Add Comment</h4>
          </Form.Label>
          <Form.Control as="textarea" name="requestcomment" required /><Button type="submit" style={{position:"relative", left:"760px", bottom:"50px"}}>Add</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddRequestComment
