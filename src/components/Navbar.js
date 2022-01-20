import { List } from "@mui/material"
import zIndex from "@mui/material/styles/zIndex"
import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import ToolRentelContext from "../utils/ToolRentelContext"
import MyDropdown from "./MyDropdown"
import { HiOutlineLogout } from 'react-icons/hi';
import { HiOutlineLogin } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';


function NavbarItem() {
  const { logout, categorys } = useContext(ToolRentelContext)

  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "rgb(34, 40, 49)", zIndex:"100"}}>
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <span>
            <img
              src="https://cdn.dribbble.com/users/39316/screenshots/6122607/tr_logo_mark.png"
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
            {localStorage.tokenOffers ? (
            <Link className="nav-link" to="/message">
              Messages
            </Link>
            ):null}
            {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categorys.map(category => (
                <Link to={`/offers?cat=${category.name}`} className="dropdown-item">
                  {category.name}
                </Link>
              ))}
            </NavDropdown> */}
            <MyDropdown />
          </Nav>
          {localStorage.tokenOffers ? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
              <CgProfile /> Profile 
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                <HiOutlineLogout />Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/login">
              <HiOutlineLogin /> Login 
              </Link>
              <Link className="nav-link" to="/signup">
              <HiOutlineLogin /> Sign Up 
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
