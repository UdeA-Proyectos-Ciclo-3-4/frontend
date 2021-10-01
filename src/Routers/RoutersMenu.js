import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Productos from "../components/Productos"
import Usuarios from "../components/Usuarios";
import Vendedores from "../components/Vendedores";
import Ventas from "../components/Ventas";


const RoutersMenu = () => {
    return (
        <div>
            
            <div className="row">
                

                <div className="col-10" id="panelCtrl">

                    <Switch>

                        <Route
                            exact
                            path="/"
                            component={Login}
                        />
                        <Route
                            exact
                            path="/vendedores"
                            component={Vendedores}
                        />

                        <Route
                            exact
                            path="/ventas"
                            component={Ventas}
                        />

                        <Route
                            exact
                            path="/productos"
                            component={Productos}
                        />

                        <Route
                            exact
                            path="/usuarios"
                            component={Usuarios}
                        />

                        <Redirect to="/" />

                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default RoutersMenu;
