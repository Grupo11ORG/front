
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createContext, useContext, useReducer } from 'react'
import Login from './components/login/Login';
import Principal from './pages/Principal';
import Navbarur from './components/Navbar/Navbarur';
import Register from './components/Register/Register';
import Footer from './components/footer/Footer';


export const UserContenxt = createContext()

function App() {

 
 const Routing = () =>{

  
  const {state, dispatch} = useContext(UserContenxt)

  //aca vienen las rutas publs. y/o privadas.
  return (
   
   //rutas publicas sin logueo
    <Switch>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/register" component={Register}/>
     <Route exact path="/" component={Principal}/>

   </Switch>
  //rutas privadas ya logueado
  

 
 ) };

  return(

    <Router>
      
      <Navbarur/>
     <>
     </>
 

      <Routing/>

      <>
      </>

      
      <Footer/>
     
    </Router> 


  ) ; 

}

export default App;
