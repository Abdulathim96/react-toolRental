import { useState } from "react"
import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function OfferAddModal(props) {
  const { show, setShow } = props
  const { categorys, addOffer } = useContext(ToolRentelContext)
  const [currentCategoryId, setCurrentCategoryId] = useState(null)
  const currentCategory = categorys.find(category => category._id == currentCategoryId)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addOffer}>
        <Modal.Header closeButton>
          <Modal.Title>Add offer</Modal.Title>
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
              Price
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="price" />
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
              <Form.Select name="categorys" onChange={(e) => setCurrentCategoryId(e.target.value)}>
                {categorys.map(categoryObject => (
                  <option value={categoryObject._id}>{categoryObject.name}</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              SubCategory
            </Form.Label>
            <Col md="8">
              <Form.Select name="subCategories">
                {currentCategory?.subCategories.map(subcategoryObject => (
                  <option value={subcategoryObject._id}>{subcategoryObject.name}</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add offer
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default OfferAddModal
