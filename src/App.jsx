

import Navbar from './CMD/Navbar/Navbar';
import Login from './CMD/Login/Login';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Signup from './CMD/Signup/Signup';
import Admin from './CMD/Admin/Admin';
import Notfound from './CMD/Notfound/Notfound';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './CMD/Admin/Dashboard/Dashboard';
import 'material-icons/iconfont/material-icons.css';


const App = ()=>{
  const design = (
    <>
<Router>
  <Routes>

    <Route path='/' element={<Signup></Signup>} ></Route>
    <Route path='login' element={<Login></Login>}></Route>
    <Route path='admin-panel' element={<Admin></Admin>}>
    <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
    </Route>

    <Route path='*' element={<Notfound></Notfound>}></Route>
  </Routes>
</Router>
    </>
  )
  return design;
}

export default App;