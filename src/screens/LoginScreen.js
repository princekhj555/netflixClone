import React, { useState } from 'react'
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen'
import logo from "../logo(1).png"
function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className="loginScreen_logo"
                src={logo} alt="netflixLogo"/>
                <button className="loginScreen_button"
                onClick={()=> setSignIn(true)}>
                    Sign In
                </button>
            <div className="loginScreen_gradient"/>
            </div>
            <div className="loginScreen_body">
                {signIn ? (
                    <SignUpScreen/>     
                ) : (
                    <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen_input">
                        <form>
                        <input type="email" placeholder="Email Address"/>
                        <button type="submit"
                         onClick={()=> setSignIn(true)}className="loginScreen_getStarted">Get Started</button>
                        </form>
                       
                    </div>
                </>

                )}
                
            </div>
        </div>
    )
}

export default LoginScreen
