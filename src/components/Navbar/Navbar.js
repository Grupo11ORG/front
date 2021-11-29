import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <nav className="navbar navbar navbar-expand-lg  navbar-light" style={{backgroundColor: "#FFC312"}}>
        <Link className="navbar-brand"  to="/#">FindTech</Link>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     
     <div className="row collapse navbar-collapse" id="navbarNav">
       <div className= "col">
       <ul className="navbar-nav">
         <li className="nav-item active">
           <Link className="nav-link"  to="/home">Lista</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link"  to="/post">Rubros</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/users">Perfil</Link>
         </li>
      
        
       
       
      
       </ul>
       </div>
       </div>  
   </nav>

                )
                }

                export default Navbar;
       
