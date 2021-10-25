import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';



export const RegisterScreen = () => {
    
    const dispatch = useDispatch();
    
    const {msgError} = useSelector(state => state.ui);

    console.log(msgError);
     
    const initialForm  = {
        name:'Nicolas',
        email:'example@example.com',
        password: 123456,
        password2: 123456,
    }

    
    
    const [ formValues, handleInputChange ] = useForm(initialForm);

    const { name, email, password, password2 } = formValues;

    const handleRegister = ( e ) => {
        e.preventDefault();
        //console.log( name, email, password, password2 );

        if ( isFormValid() ) {
            console.log('Formulario correcto');
            dispatch(startRegisterWithEmailPasswordName(email,password,name));
        }
    }

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {
            dispatch(setError('Name is required'));
            return false;
        } else if(! validator.isEmail(email) ) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if   ( password !== password2 || password.length < 5 ) {
            dispatch(setError('Password should be at least 5 characters and match each other'));
            return false;
        } 

        dispatch(removeError());


        return true;
        


    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister }>
                
               { 
                    msgError &&

                    (   
                        <div className="auth__alert-error">
                           { msgError }
                        </div>
                    )
                
               }


                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                 <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    /* disabled={ true } */
                >
                    Register
                </button>

                
                
                <Link to="/auth/login" className="link">
                   Already registered?
                </Link>

            </form>
        </div>
    )
}
