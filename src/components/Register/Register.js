import React from 'react'
import './register.css'

const Register = () => {
    return (
        <div className="container animate__animated animate__bounceInUp">
            <div className="d-flex justify-content-center h-100">
            <div className="card">
    <div className="card-body">
        <h2 className="title" style={{color:"white"}} >Registrese</h2>
        <form method="POST">
            <div className="input-group form-group">
                <div className="card-body">
                    <div className="input-group">
                        <span className="label"style={{color:"white"}} ></span>
                        <input className="input--style-4" type="text" name="first_name" placeholder="Nombre"/>
                    </div>
                </div><br/>
                <div className="card-body">
                    <div className="input-group">
                        <span className="label" style={{color:"white"}}></span>
                        <input className="input--style-4" type="text" name="last_name" placeholder="Apellido"/>
                    </div>
                </div>
                <div className="card-body">
                    <div className="input-group">
                        <span className="label" style={{color:"white"}}></span>
                        <input className="input--style-4" type="text" name="last_name" placeholder="Nombre de Usuario"/>
                    </div>
                </div>
            </div>
            <div className="row row-space">
                <div className="card-body">
                    <div className="input-group">
                        <label className="label" style={{color:"white"}}>Genero</label>
                        <div className="p-t-10"><br/>
                            <label className="radio-container m-r-45" style={{color:"white", margin:"10px"}}>Masculino
                                <input type="radio" checked="checked" name="gender"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-container" style={{color:"white"}}>Femenino
                                <input type="radio" name="gender"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-space">
                <div className="card-body">
                    <div className="input-group">
                        <span className="label" style={{margin:"10px", color:"white"}}></span>
                        <input  type="email" name="email" placeholder="Email"/>
                    </div>
                </div>
                <div className="card-body">
                    <div className="input-group">
                        <span className="span"  style={{margin:"10px",color:"white"}}></span>
                        <input type="text" name="phone" placeholder="Telefono"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <button className="btn float-right login_btn" type="submit" to="/" >Enviar</button>
            </div>
        </form>
    </div>
</div>
            </div>
        </div>
    )
}

export default Register
