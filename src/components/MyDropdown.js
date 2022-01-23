import React, { useRef } from "react"
import { useContext } from "react"
import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import ToolRentelContext from "../utils/ToolRentelContext"

function MyDropdown(props) {
  const ref = useRef()
  const { categorys } = useContext(ToolRentelContext)
  const data = categorys.map(category => ({
    _class: category.subCategories.length > 0 ? "submenu" : "leaf",
    name: category.name,
    children: category.subCategories.map(subCategory => ({ _class: "leaf", name: subCategory.name })),
  }))
  const data2 = [
    {
      _class: "leaf",
      name: "Node",
    },
    {
      _class: "submenu",
      name: "Submenu",
      children: [
        {
          _class: "leaf",
          name: "Node",
        },
        {
          _class: "leaf",
          name: "Node",
        },
      ],
    },
  ]

  const recursiveMenu = (items, parent = "") => {
    return items.map((o, i) =>
      o._class !== "submenu" ? (
        <Link
          to={`/offers?cat=${o.name}`}
          className="dropdown-item"
          key={`${i}/${o.name}`}
          onSelect={props.onSelect}
          id={`${parent}/${o.name}`}
        >
          {o.name}
        </Link>
      ) : o.children?.length > 0 ? (
        <Dropdown key={i} drop="right">
          <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
            {o.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>{recursiveMenu(o.children, `${parent}/${o.name}`)}</Dropdown.Menu>
        </Dropdown>
      ) : null
    )
  }

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      className="dropdown-item dropdown-toggle"
      href=""
      ref={ref}
      onMouseEnter={e => onClick(e)}
      onClick={e => {
        e.preventDefault()
        onClick(e)
      }}
    >
      {children}
    </a>
  ))

  return (
    <Dropdown ref={ref}>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{backgroundColor: "rgb(34, 40, 49)", color: "rgb(155, 158, 162)"}}>
        Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>{recursiveMenu(data)}</Dropdown.Menu>
    </Dropdown>
  )
}

export default MyDropdown
