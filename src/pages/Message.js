import axios from "axios"
import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Link, useParams } from "react-router-dom"
import AddDmMessage from "../components/AddDmMessage"
import ToolRentelContext from "../utils/ToolRentelContext"

function Message() {
  const { profile } = useContext(ToolRentelContext)
  const [messages, setMessages] = useState([])
  const [conversations, setConversations] = useState([])

  const { receiveId } = useParams()

  const getConversations = async () => {
    const response = await axios.get(`http://localhost:5000/api/messages/conversations`, {
      headers: {
        Authorization: localStorage.tokenOffers,
      },
    })
    setConversations(response.data)
  }

  const getMessages = async () => {
    const response = await axios.get(`http://localhost:5000/api/messages/${receiveId}/directmessage`, {
      headers: {
        Authorization: localStorage.tokenOffers,
      },
    })
    setMessages(response.data)
  }
  useEffect(() => {
    if (receiveId) getMessages()
  }, [receiveId])

  useEffect(() => {
    getConversations()
  }, [])

  const addMessage = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const messageBody = {
        message: form.elements.message.value,
      }

      form.reset()
      await axios.post(`http://localhost:5000/api/messages/${receiveId}/directmessage`, messageBody, {
        headers: {
          Authorization: localStorage.tokenOffers,
        },
      })
      getMessages()
      getConversations()
      toast.success("Message added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div class="container py-5">
        <Row>
          <Col md="2">
            <h2>conversations</h2>
            {conversations.map(conversation => (
              <>
                {conversation.sender?._id == profile?._id ? (
                  <Link to={`/message/${conversation.receive?._id}`}>
                      <img src={conversation.receive?.avatar} alt=""  alt="avatar"
                            class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                            width="60" style={{clipPath: "circle()",width:"50px"}}/>
                    <p>{conversation.receive?.firstName}</p>
                  </Link>
                ) : (
                  <Link to={`/message/${conversation.sender?._id}`}>
                    <p>{conversation.sender?.firstName}</p>
                  </Link>
                )}
              </>
            ))}
          </Col>
          <Col>
            <div class="row"style={{width: "100%",}}>
              <div class="col-md-6 col-lg-7 col-xl-8" style={{ marginLeft: 250 }}>
                <ul class="list-unstyled">
                  {messages.map(message => (
                    <>
                      {message.sender?._id == profile?._id ? (
                        <li class="d-flex  mb-4">
                          <img
                            src={profile.avatar}
                            alt="avatar"
                            class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                            width="60"
                            style={{
                                clipPath: "circle()",
                            }}
                          />
                          <div class="card">
                            <div class="card-header d-flex  p-3">
                              <p class="fw-bold mb-0">
                                {profile.firstName} {profile.lastName}
                              </p>
                            </div>
                            <div class="card-body" >
                              <p class="mb-0">{message.message}</p>
                            </div>
                          </div>
                        </li>
                      ) : (
                        <li class="d-flex  mb-4">
                          <div class="card w-100">
                            <div class="card-header d-flex  p-3">
                              <p class="fw-bold mb-0">
                                {message.sender.firstName} {message.sender.lastName}
                              </p>
                            </div>
                            <div class="card-body">
                              <p class="mb-0">{message.message}</p>
                            </div>
                          </div>
                          <img
                            src={message.sender.avatar}
                            alt="avatar"
                            class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                            width="60"
                            style={{
                                clipPath: "circle()",
                            }}
                          />
                        </li>
                      )}
                    </>
                  ))}
                  <AddDmMessage addMessage={addMessage} receiveId={receiveId}/>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Message
