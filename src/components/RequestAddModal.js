import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function RequestAddModal(props) {
  const { show, setShow } = props
  const { categorys, addRequest } = useContext(ToolRentelContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addRequest}>
        <Modal.Header closeButton>
          <Modal.Title>Add request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              phoneNumber
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="phoneNumber" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Category
            </Form.Label>
            <Col md="8">
              {categorys.map(categoryObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="categorys" value={categoryObject._id} />
                  </Col>
                  <Col md="2">
                    <span>{categoryObject.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add request
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default RequestAddModal
