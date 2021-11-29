import React from 'react'
import { Link } from 'react-router-dom'


const Principal = () => {
    return (

<div>
    <body>
        <br/>
        
       
        <div className="panel panel-success animate_animated animate__bounceOut" style={{textAlign:"center", color:"#FFC312"}} >
        <div className="panel-heading"><h1>Bienvenido a FindTech</h1></div>
        <div className="panel-body">
        La plataforma de busqueda de profesionales y expertos en tecnologia
        </div>
        <img src='https://previews.123rf.com/images/jaaakworks/jaaakworks1604/jaaakworks160400019/54640662-los-t%C3%A9cnicos-de-reparaci%C3%B3n-de-dibujos-animados-un-smartphone-roto.jpg' 
        style={{width:"350px", height:"350px"}} />
      </div>
      <br/>
      
      <div className="panel panel-default"  style={{textAlign:"center", color:"#FFC312"}}>
        <div className="panel-heading">
          <h3 className="panel-title">Encuentre su especialista</h3>
        </div>
        
        <div className="panel-body"  style={{textAlign:"center", color:"#FFC312"}}>
        <button type="button" className="btn btn-warning" style={{margin:"15px"}} > <Link className="btn-link" to="/register" >
             Registrese</Link></button>

        <button type="button" className="btn btn-warning"><Link className="btn-link" to="/login">Iniciar Sesion</Link></button>

        </div>
      </div>
      <br/>
     
        
      </body>
      </div>
    )
}

export default Principal
