import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm';
import ReactLoading from 'react-loading';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.ui.loading);

    const [formValues, handleInputChange ]  = useForm({
        email: 'example@example.com',
        password: '123456'
    });

    const { email, password } = formValues;

    

    const handleLogin = (e) => {
        e.preventDefault();
        //console.log(email, password);
        dispatch(startLoginEmailPassword(email,password));
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <div>
            <h3 className="auth__title">Login</h3>
            <form 
                onSubmit= {handleLogin}
                className="animate__animated animate__fadeIn animate__faster"
            >

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                 <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <div style={{ position:'relative',}}>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={ loading }
                        style={{ height:'28px',}}
                    >
                        {
                            loading
                            ?
                                <div className="auth__show-loading">
                                    <ReactLoading type={'spinningBubbles'} color={'#4285f4'} height={28} width={28} />
                                </div>
                            :
                            <p>Login</p>
                        }
                    </button>
                    
                </div>

                <hr/>
                <div className="auth__social-networks">

                    <p> Login with social networks</p>

                    <div 
                        className="google-btn mb-5"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>
                
                <Link to="/auth/register" className="link">
                    Create new account
                </Link>

            </form>
        </div>
    )
}
