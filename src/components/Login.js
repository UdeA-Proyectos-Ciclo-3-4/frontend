import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="mt-5 container-fluid">
                <h3 className="row justify-content-center">Iniciar Sesión</h3>
                <div className="mt-5 container-fluid col col-md-4">
                    <div className="m-auto row justify-content-center align-items-center">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1 " className="form-label">Correo electronico</label>
                            <input
                            type="email "
                            className="form-control"
                            id="exampleFormControlInput1 "
                            placeholder="correo@ejemplo.com "
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1 " className="form-label">Contraseña</label>
                            <input
                            type="password "
                            className="form-control"
                            id="exampleFormControlInput1 "
                            placeholder="contraseña "
                            />
                        </div>
                        <Link to={"/vendedores"} 
                        class="btn btn-outline-secondary" 
                        role="button"
                        >Iniciar Sesión
                        </Link>
                        <Link to={"/auth/contraseña"}>
                            <p className="mt-3 row justify-content-center">
                                ¿Olvidaste tu contraseña?
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
       </>
    )
}

export default Login
