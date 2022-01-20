import { useContext, useEffect, useState } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function RequestsEditModal(props) {
  const { show, setShow, request } = props
  const { categorys, editRequest } = useContext(ToolRentelContext)
  const [currentCategoryId, setCurrentCategoryId] = useState(null)
  const currentCategory = categorys.find(category => category._id == currentCategoryId)
  useEffect(()=> {
  if (categorys.length > 0)  setCurrentCategoryId(categorys[0]._id)
  },[categorys])
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editRequest(e, request._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={request.title} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={request.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={request.photo} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Phone Number
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="phoneNumber" defaultValue={request.phoneNumber} required />
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
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default RequestsEditModal
