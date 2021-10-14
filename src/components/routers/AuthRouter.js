import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <>
          <Switch>
              <Route exact path="/auth/login" component={ LoginScreen } />
              <Route exact path="/auth/register" component={ RegisterScreen } />

              <Redirect to="/auth/login" />
          </Switch>
        </>
    )
}
