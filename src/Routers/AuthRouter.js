import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "../components/Login";
import Registrarse from "../components/Registrarse";

const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/ingresar"
                        component={ Login }
                    />
                    <Route 
                        exact
                        path="/auth/registro"
                        component={ Registrarse }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </div>
    )
}

export default AuthRouter;