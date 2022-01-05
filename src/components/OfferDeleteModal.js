import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function OfferDeleteModal(props) {
  const { deleteOffer } = useContext(ToolRentelContext)
  const { show, setShow, offerId } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Offer</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this offer ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteOffer(offerId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default OfferDeleteModal
