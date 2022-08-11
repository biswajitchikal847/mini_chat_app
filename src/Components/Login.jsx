import React from 'react'
import './Login.css'

import db,{ auth, googleProvider } from "../Firebase";
import { useNavigate} from "react-router-dom";


function Login({setUser}) {
const navigate = useNavigate()
        const signInWithGoogle = () => {
            auth.signInWithPopup(googleProvider)
                .then((result) => {
                    const newuser = {
                        fullname: result.user.displayName,
                        email: result.user.email,
                        photoURL: result.user.photoURL
                    }
                  navigate('/')
                  setUser(newuser)
                  localStorage.setItem('user', JSON.stringify(newuser))
                  db.collection('users').doc(result.user.email).set(newuser);
                })

                .catch((err) => alert(err.message))
        }



        return (
            <div className='login'>
                <div className="login_container">
                    <img className='login_logo' src="./WhatsappImage.png" alt="" />
                    <p className="login_name">
                        Whats App Web
                    </p>
                    <button className='login_btn' onClick={signInWithGoogle}>
                        <img src="./googleLogo.png" alt="login with google" />
                        Login with Google
                    </button>

                </div>

            </div>
        )
    }

export default Login