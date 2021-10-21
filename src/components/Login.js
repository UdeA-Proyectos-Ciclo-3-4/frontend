import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const idClientGoogle = '367337669931-s6d728je9j4p0nkq11u8r53s2an0hdeo.apps.googleusercontent.com';

// Functional Component
const Login = () => {

    const history = useHistory();

    const handleSuccessGoogle = async response => {

        const
            dataResponse = await fetch( `${ process.env.REACT_APP_API_URL }/api/auth/google-login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    tokenId: response.tokenId
                })
            }),
            data = await dataResponse.json();

            if( data ) {
                console.log( data );
                history.push( '/productos' );
            }

    }

    const handleFailureGoogle = response => {
        console.log( 'Failure: ', response );
    }

    return (
        <div className="mt-5 container-fluid">
            <h3 className="row justify-content-center">Iniciar Sesión</h3>
            <div className="mt-5 container-fluid col col-md-4">
                <div className="m-auto row justify-content-center align-items-center">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1 " className="form-label">Correo electronico</label>
                        <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="correo@ejemplo.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="contraseña"
                        />
                    </div>
                    <Link to={"/vendedores"}
                        className="btn btn-outline-secondary"
                        role="button"
                    >Iniciar Sesión</Link>
                    <Link to={"/auth/contraseña"}>
                        <p className="mt-3 row justify-content-center">
                            ¿Olvidaste tu contraseña?
                        </p>
                    </Link>
                    <div className="separador">
                        <p className="texto"><span>or</span></p>
                        <hr />
                    </div>
                    <GoogleLogin
                        className="btn-google"
                        clientId={ idClientGoogle }
                        buttonText="Login with Google"
                        onSuccess={ handleSuccessGoogle }
                        onFailure={ handleFailureGoogle }
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login;
