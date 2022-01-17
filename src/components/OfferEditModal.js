import { useContext, useEffect, useState } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function OffersEditModal(props) {
  const { show, setShow, offer } = props
  const { categorys, editOffer } = useContext(ToolRentelContext)
  const [currentCategoryId, setCurrentCategoryId] = useState(null)
  const currentCategory = categorys.find(category => category._id == currentCategoryId)
  useEffect(()=> {
  if (categorys.length > 0)  setCurrentCategoryId(categorys[0]._id)
  },[categorys])
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editOffer(e, offer._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={offer.title} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={offer.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={offer.photo} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Price
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="price" defaultValue={offer.price} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Phone Number
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="phoneNumber" defaultValue={offer.phoneNumber} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              available
            </Form.Label>
            <Col md="8">
              {/* <Form.Control type="text" name="phoneNumber" defaultValue={offer.phoneNumber} required /> */}
              <Form.Check type="switch" id="custom-switch" name="available" />
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
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default OffersEditModal
