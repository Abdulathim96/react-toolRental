import { useContext, useState } from "react"
import { Row, Button } from "react-bootstrap"
import RequestItem from "../components/RequestItem"
import ToolRentelContext from "../utils/ToolRentelContext"
import AddIcon from "@mui/icons-material/Add"
import RequestAddModal from "../components/RequestAddModal"

function AllRequests() {
  const { requests,categorys } = useContext(ToolRentelContext)
  const [category, setCategory] = useState(null)
  const [show, setShow] = useState(false)

  let requestCategory = requests
  if (category) requestCategory = requests.filter(request => request.categorys.find(c => category == c.name))

  return (
    <>
    <div style={{  background: "rgb(248, 248, 248)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", background: "rgb(248, 248, 248)" , marginRight: 170  }}>
        <h4 className="mt-5 mb-4" style={{marginLeft: 180}}>Requests</h4>
        <Button style={{ marginRight: 50, marginTop: 50 ,marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          Add Request<AddIcon />
        </Button>
      </div>
      </div>
      <Row md={1}>
        {requestCategory.map(request => (
          <RequestItem request={request} key={request._id} />
        ))}
      </Row>
      <RequestAddModal show={show} setShow={setShow} />
    </>
  )
}

export default AllRequests
