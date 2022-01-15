import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import RequestPageIcon from "@mui/icons-material/RequestPage"
import CategoryIcon from "@mui/icons-material/Category"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import GroupIcon from "@mui/icons-material/Group"
import StoreIcon from "@mui/icons-material/Store"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import ToolRentelContext from "../utils/ToolRentelContext"
import { useContext, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout, categorys } = useContext(ToolRentelContext)
    const [category, setCategory] = useState(null)
  //   const [searchParams, setSearchParams] = useSearchParams()
  //   const queryCat = searchParams.get("cat")

  useEffect(
    () => {
      // const queryCat = searchParams.get("cat")
      // setCategory(queryCat)
    } /*[searchParams]*/
  )

  return (
    <ThemeProvider 
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(0, 0, 0)" },
          background: { paper: "rgb(7, 34, 39)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          zIndex: "0",
          

          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="categories" />
            <ListItemText></ListItemText>
            <ListItemText></ListItemText>
          </ListItem>
        </List>
        <List>
          <Link to="/offers">
            <ListItem button>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="offers" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/requests">
            <ListItem button>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="requests" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        {/* <Link>
        <List>
              <ListItem>
              <ul>
                  <Link>
        <li onClick={() => setCategory(null)}>All</li>

        {categorys.map(cat => (
          <li onClick={() => setCategory(cat.name)}>{cat.name}</li>
        ))}
        </Link>
      </ul>
              </ListItem>
          </List>
          </Link> */}
      </Drawer>
    </ThemeProvider>
  )
}
