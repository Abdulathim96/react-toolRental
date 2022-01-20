import { SkateboardingSharp } from "@mui/icons-material"
import { useContext } from "react"
import { Col, Form, Button, Row } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function AddDmMessage(props) {
  const { receiveId, addMessage } = props
  return (
    <div className="ms-4" style={{ marginTop: 250 }}>
      <Form className="mt-5" onSubmit={e => addMessage(e, receiveId)}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Message
          </Form.Label>
          <Col md="6" style={{ width: "100%" }}>
            <Form.Control as="textarea" name="message" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col>
            <Button
              type="submit"
              style={{
                border: "none",
                color: "white",
                textDecoration: "none",
                margin: "4px 2px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Add
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddDmMessage
