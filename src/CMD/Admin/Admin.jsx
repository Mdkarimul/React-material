import Navbar from "../Navbar/Navbar";
import {
  
  Drawer ,
  Box,List,ListItemButton,ListItemIcon,ListItem,ListItemText,
  Stack,AppBar,Button,IconButton,Toolbar,ListSubheader

} from '@mui/material';
import { Outlet,Link } from 'react-router-dom';

import AdminMenu from '../../json-api/AdminMenu.json';

import { useState } from "react";


const Dwidth = 250;
const Admin = ()=>{

const [active,setActive] = useState(true);
const [Dwidth,setDwidth] = useState(250);

const Nav = ({data})=>{
  const design = (
    <>
   
<ListItem sx={{py:0}}>
            <ListItemButton LinkComponent={Link} to="dashboard">
              <ListItemIcon>
              <span className="material-icons">{data.icon}</span> 
              </ListItemIcon>
              <ListItemText primary={data.label} />
            </ListItemButton>
          </ListItem>
    </>
  )
  return design;
}


const MenuList = ({admin})=>{
const desing = (
<>
<List subheader={<ListSubheader>{admin.cat}</ListSubheader>}>

{
  admin.menus.map((menu)=>{
    return <Nav key={menu.id} data={menu}></Nav>
  })
}
</List>
</>
)
return desing;
}

const controllDrawer = ()=>{
  return (
    setActive(!active),
    active ?  setDwidth(0) : setDwidth(250)
  )
}
  const desing = (
   <>
<Stack>
  <Drawer open={active} variant="persistent" sx={{
  width:Dwidth,
  "& .MuiDrawer-paper" : {
    width:Dwidth,
    bgcolor: "f5f5f5"
  },
  transition : "0.1s"
  }}>

<List sx={{mt:4}} subheader={<ListSubheader>
  <img src="../../images/logo.webp" width="200" alt="brand-logo" />
</ListSubheader>}></List>
{
  AdminMenu.map((admin)=>{
    return <MenuList  key={admin.id} admin={admin}></MenuList>
  })
}


{/* <List subheader={<ListSubheader>DASHBOARD</ListSubheader>}>
 {
  AdminMenu.map((item)=>{
   return <Nav key={item.id} data={item}></Nav>
  })
 }
</List> */}

  </Drawer>

  <AppBar position="fixed" sx={{
   width: `calc(100% - ${Dwidth}px)`,
   transition : "0.1s"
  }}>
    <Toolbar>
      <IconButton color="inherit" onClick={controllDrawer}>
      <span className="material-icons">menu</span> 
      </IconButton>
    </Toolbar>
  </AppBar>

  <Stack sx={{
    ml: `${Dwidth}px`,
    mt : 4,
    p : 3,
    transition : "0.1s"
  }}>
 <Outlet></Outlet>
  </Stack>
</Stack>

 {/* <Drawer open={active} anchor="left" onClose={()=>setActive(!active)}>
  <Box sx={{width:250}}>
<List>
<ListItem>
            <ListItemButton LinkComponent={Link} to="dashboard">
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
</List>
  </Box>
  <h2>karimul islam</h2>
<Dashboard></Dashboard>
  </Drawer>

  <Stack>
    <AppBar position="static"  color="secondary" sx={{p:0}}>
      <Stack justifyContent="space-between" direction="row">
      <Toolbar>
      <IconButton color="inherit" onClick={()=>setActive(!active)}>
      <Menu></Menu>
      </IconButton>
      </Toolbar>
      <Toolbar>
      <IconButton color="inherit">
      <Logout></Logout>
      </IconButton>
      </Toolbar>
      </Stack>
    </AppBar>
    <Box sx={{p:4}}>
      <Outlet></Outlet>
    </Box>
  </Stack> */}

   </>
  )
  return desing;
}
export default Admin;