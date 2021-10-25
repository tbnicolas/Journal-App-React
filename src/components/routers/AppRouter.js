import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        const auth = getAuth();
        onAuthStateChanged(auth, (user) =>{
            //console.log(user);

            if (user?.uid) {
                dispatch( login(user.uid,user.displayName) );
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
            
        });

    }, [dispatch,setChecking, setIsLoggedIn]);

    if( checking ) {
        return <h1> Espere porfavor..</h1>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ JournalScreen } />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
