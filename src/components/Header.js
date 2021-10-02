import React from 'react'
import logo2 from '../logo2.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid col col-md-9">
                    <a class="navbar-brand" href="#">
                    <img
                        src={logo2}
                        alt=""
                        width="30"
                        height="24"
                        class="d-inline-block align-text-top logo"
                    />
                    Manufacturas
                    </a>
                </div>
                <div class="col col-md-3">
                    <Link to={"/auth/ingresar"} 
                        class="btn btn-outline-secondary btn-login" 
                        role="button"
                        >Iniciar Sesión
                    </Link>
                    <Link
                        to={"/auth/registro"}
                        class="btn btn-outline-secondary btn-register"
                        role="button"
                    >Registrarse
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
