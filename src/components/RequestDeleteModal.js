import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function RequestDeleteModal(props) {
  const { deleteRequest } = useContext(ToolRentelContext)
  const { show, setShow, requestId } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this request ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteRequest(requestId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default RequestDeleteModal
