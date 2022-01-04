import { List } from "@mui/material"
import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import ToolRentelContext from "../utils/ToolRentelContext"

function NavbarItem() {
  const { logout, categorys } = useContext(ToolRentelContext)

  return (
    <Navbar  variant="dark" expand="lg" style={{backgroundColor: "black",}}>
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTEzL4JDi2D-839RRHdluTGQp3jMGYffWmA&usqp=CAU"
              width={50}
            />
          </span>
           Tool Rental 
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/offers">
              Offers
            </Link>
            <Link className="nav-link" to="/requests">
              Requests
            </Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              
              {categorys.map(category => (
                <NavDropdown.Item>{category.name}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          {localStorage.tokenOffers ? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
