import Grid  from '@mui/material/Grid';
import Stack  from '@mui/material/Stack';
import Button  from '@mui/material/Button';
import Container  from '@mui/material/Container';
import TextField  from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link,useNavigate } from 'react-router-dom';

const Login = ()=>{

  const navigate  = useNavigate();


  const login = (e)=>{
   e.preventDefault();
   navigate("/admin-panel");
   alert();
  }
  const desing = (
<>
<Container>
  <Grid container>
<Grid item xs={12} sx={{border:"1px solid red"}} md={6}>
  <h1>test</h1>
</Grid>
<Grid item xs={12} md={6}>
  <h1>Login</h1>
  <form action="" onSubmit={login}>
    <Stack direction="column" spacing={3}>
    <TextField label="Username" variant='outlined' type='text'></TextField>
    <TextField label="Password" variant='outlined' type='password'></TextField>
    <Stack direction="row" justifyContent="end">
      <a href="">Forgot password ? </a>
    </Stack>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
    <FormGroup>
      <FormControlLabel  control={<Checkbox />} label="Remember me " />
    </FormGroup>
    
    <Button type='submit' sx={{px:3,py:1}} variant='contained' color='secondary'>Login</Button>
    </Stack>
    <Link  to="/">Create an account ? </Link>
    </Stack>
 
  </form>
</Grid>
  </Grid>
</Container>
</>
  );
  return desing;

}

export default Login;