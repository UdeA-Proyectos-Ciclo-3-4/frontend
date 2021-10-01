import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import RoutersMenu from './RoutersMenu';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
    return (
        <>
        <Router>
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

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
            
        </>
    )
}

export default AppRouter;
