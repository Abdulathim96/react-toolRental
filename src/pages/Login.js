import { useContext } from "react"
import { Form, Col, Container, Row, Button } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"
import login1Icon from "../assets/login1.png"
import login2Icon from "../assets/login2.png"

function Login() {
  const { login } = useContext(ToolRentelContext)

  return (
    // <div className="ms-4">
    //   <h1>Login</h1>
    //   <Form className="mt-5" onSubmit={login}>
    //     <Form.Group as={Row} className="mb-3">
    //       <Form.Label column md="2">
    //         Email
    //       </Form.Label>
    //       <Col md="6">
    //         <Form.Control type="email" name="email" required />
    //       </Col>
    //     </Form.Group>
    //     <Form.Group as={Row} className="mb-3">
    //       <Form.Label column md="2">
    //         Password
    //       </Form.Label>
    //       <Col md="6">
    //         <Form.Control type="password" name="password" required />
    //       </Col>
    //     </Form.Group>

    //     <Form.Group as={Row} className="my-4">
    //       <Col md={{ span: 10, offset: 2 }}>
    //         <Button type="submit">Login</Button>
    //       </Col>
    //     </Form.Group>
    //   </Form>
    // </div>
    <>
    <Container className="mt-5">
      <Row>
        <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
          <img className="icon-img" style={{
           width: "70px",
           height: "70px",
           marginBottom: "2rem",
          }} src={login1Icon} alt="icon" />
        <Form onSubmit={login}>
  <Form.Group controlId="formBasicEmail"><h1>Login</h1>
    <Form.Control type="email" name="email" required />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" name="password" required />
  </Form.Group>
  <Button type="submit" style={{
     color: "#fff",
     backgroundColor: "#fed03a",
     borderColor: "rgb(255, 209, 56) !important",
  }}>Login</Button>
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

export default Login