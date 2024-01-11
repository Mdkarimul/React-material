import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './Navbar.css';
import Menus from '../../json-api/Menus.json';
import { Link } from 'react-router-dom';

const Navbar = ()=>{

 
  const design = (
    <>
    <Stack className='bg-light'>
      <Container className='bg-light'>
        <Stack direction={{
          md : "column",
          lg : "row"
        }} justifyContent="space-between">
          <div>
          <h4>testing</h4>
          </div>
       
          <Stack direction={
          {
            md : "column",
          lg : "row"
          }
          }   spacing={1}>
            
            
           {
            Menus.map((items)=>{
              return <Link key={items.id} to={items.link} sx={{
              borderRadius:"0",
              px : 4,
              "&:hover" : {
                transition : "0.5s",
                backgroundColor : "secondary.main",
                color : "white"
              }
              }}>{items.label}</Link>
            })
         
           }
              
          </Stack>
        </Stack>

      </Container>
    </Stack>
    </>
  )
  return design;
}

export default Navbar;