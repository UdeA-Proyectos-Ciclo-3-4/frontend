import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import RoutersMenu from './RoutersMenu';
import AuthRouter from './AuthRouter';
import Header from "../components/Header";
import Footer from '../components/Footer';

const AppRouter = () => {
    return (
        <>
        <Router>
            <Header />
                    <div>
                        <Switch>
                            <Route
                                path="/auth"
                                children={<AuthRouter />}
                            />

                            <Route
                                path="/"
                                children={ <RoutersMenu /> }
                            />

                            <Redirect to="/auth/ingresar" />

                        </Switch>
                    </div>
            <Footer />
        </Router>
        </>
    )
}

export default AppRouter;
