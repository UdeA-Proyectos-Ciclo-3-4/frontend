import React from 'react';
import logo2 from '../logo2.png';
import { Link } from 'react-router-dom';

// Functional Component
const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid col col-md-9">
                <Link
                    to="/"
                    className="navbar-brand"
                >
                    <img
                        src={logo2}
                        alt=""
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top logo"
                    />
                Manufacturas</Link>
            </div>
            <div className="col col-md-3">
                <Link
                    to={"/auth/ingresar"}
                    className="btn btn-outline-secondary btn-login"
                    role="button"
                >Iniciar Sesión</Link>
                <Link
                    to={"/auth/registro"}
                    className="btn btn-outline-secondary btn-register"
                    role="button"
                >Registrarse</Link>
            </div>
        </nav>
    )
}

export default Header;
