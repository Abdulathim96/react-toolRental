import { useContext } from "react"
import { Container, Form, Col, Row, Button } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"
import login1Icon from "../assets/login1.png"
import login2Icon from "../assets/login2.png"

function SignUp() {
  const { signup } = useContext(ToolRentelContext)

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
            <img
              className="icon-img"
              style={{
                width: "70px",
                height: "70px",
                marginBottom: "2rem",
              }}
              src={login1Icon}
              alt="icon"
            />
            <Form onSubmit={signup}>
              <Form.Group controlId="formBasicFirstName">
                <h1>Sign Up</h1>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Control placeholder="First Name" name="firstName" type="text" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control placeholder="last Name" type="text" name="lastName" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="Email" type="email" name="email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control placeholder="Phone number" type="text" name="phoneNumber" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control placeholder="password" type="password" name="password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control placeholder="Avatar" type="url" name="avatar" required />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  color: "#fff",
                  backgroundColor: "#fed03a",
                  borderColor: "rgb(255, 209, 56) !important",
                }}
              >
                Signup
              </Button>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img className="w-100" src={login2Icon} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SignUp
