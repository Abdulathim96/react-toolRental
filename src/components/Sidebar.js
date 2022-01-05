// import * as React from "react"
// import Box from "@mui/material/Box"
// import Drawer from "@mui/material/Drawer"
// import CssBaseline from "@mui/material/CssBaseline"
// import AppBar from "@mui/material/AppBar"
// import Toolbar from "@mui/material/Toolbar"
// import List from "@mui/material/List"
// import Typography from "@mui/material/Typography"
// import Divider from "@mui/material/Divider"
// import ListItem from "@mui/material/ListItem"
// import ListItemIcon from "@mui/material/ListItemIcon"
// import ListItemText from "@mui/material/ListItemText"
// import InboxIcon from "@mui/icons-material/MoveToInbox"
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import RequestPageIcon from '@mui/icons-material/RequestPage';
// import CategoryIcon from '@mui/icons-material/Category'
// import RecentActorsIcon from "@mui/icons-material/RecentActors"
// import GroupIcon from "@mui/icons-material/Group"
// import StoreIcon from '@mui/icons-material/Store';
// import { createTheme, ThemeProvider } from "@mui/material"
// import { Link } from "react-router-dom"
// import LoginIcon from "@mui/icons-material/Login"
// import LogoutIcon from "@mui/icons-material/Logout"
// import GroupAddIcon from "@mui/icons-material/GroupAdd"
// import ToolRentelContext from "../utils/ToolRentelContext"
// import { useContext,useState,useEffect } from "react"
// import { useSearchParams } from "react-router-dom"

// const drawerWidth = 240

// export default function PermanentDrawerLeft() {
//   const { logout,categorys } = useContext(ToolRentelContext)
//   const [category, setCategory] = useState(queryCat || null)
//   const queryCat = searchParams.get("cat")

//   useEffect(() => {
//     const queryCat = searchParams.get("cat")
//     setCategory(queryCat)
//   }, [searchParams])


//   return (
//     <ThemeProvider
//       theme={createTheme({
//         components: {
//           MuiListItemButton: {
//             defaultProps: {
//               disableTouchRipple: true,
//             },
//           },
//         },
//         palette: {
//           mode: "dark",
//           primary: { main: "rgb(102, 157, 246)" },
//           background: { paper: "rgb(4, 28, 50)" },
//         },
//       })}
//     >
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//           <List>
//               <ListItem>
//               <ul>
//         <option onClick={() => setCategory(null)}>All</option>

//         {categorys.map(cat => (
//           <option onClick={() => setCategory(cat.name)}>{cat.name}</option>
//         ))}
//       </ul>
//               </ListItem>
//           </List>
//         <List>
//           <ListItem>
//             <ListItemIcon>
//               <StoreIcon />
//             </ListItemIcon>
//             <ListItemText primary="My Tool Rentel dashboard" />
//           </ListItem>
//         </List>
//         <List>
//           <Link to="/offers">
//             <ListItem button>
//               <ListItemIcon>
//                 <LocalOfferIcon />
//               </ListItemIcon>
//               <ListItemText primary="offers" sx={{ color: "white", textDecoration: "none" }} />
//             </ListItem>
//           </Link>
//           <Link to="/requests">
//             <ListItem button>
//               <ListItemIcon>
//                 <RequestPageIcon />
//               </ListItemIcon>
//               <ListItemText primary="requests" sx={{ color: "white", textDecoration: "none" }} />
//             </ListItem>
//           </Link>
//           <Link to="/categorys">
//             <ListItem button>
//               <ListItemIcon>
//                 <CategoryIcon />
//               </ListItemIcon>
//               <ListItemText primary="categorys" sx={{ color: "white", textDecoration: "none" }} />
//             </ListItem>
//           </Link>
//         </List>
//         <Divider />
//         <List>
//           <Link to="/users">
//             <ListItem button>
//               <ListItemIcon>
//                 <GroupIcon />
//               </ListItemIcon>
//               <ListItemText primary="users" sx={{ color: "white", textDecoration: "none" }} />
//             </ListItem>
//           </Link>
//         </List>
//         {!localStorage.tokenDashboardOffers ? (
//           <List style={{ marginTop: "auto" }}>
//             <Link to="/login">
//               <ListItem button>
//                 <ListItemIcon>
//                   <LoginIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
//               </ListItem>
//             </Link>
//           </List>
//         ) : (
//           <List style={{ marginTop: "auto" }}>
//             <ListItem button onClick={logout}>
//               <ListItemIcon>
//                 <LogoutIcon />
//               </ListItemIcon>
//               <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} />
//             </ListItem>
//           </List>
//         )}
//       </Drawer>
//     </ThemeProvider>
//   )
// }
