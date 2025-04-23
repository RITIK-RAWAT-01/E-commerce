import React from "react";
import './CSS/LoginSignup.css'
function LoginSignup(){

    return(
        <div className="Form">
            <div className="LoginSignup">
                <div className="LogInSignUp_title">
                    <h1>Sign Up</h1>
                </div>

                    <input type="text" id="input_filds" placeholder="Your Name"/>

                    <input type="email" id="input_filds" placeholder="Email Address"/>

                    <input type="password" id="input_filds" placeholder="Password"/>
                    
                <div className="submit_button">
                    <button>Continue</button>
                </div>
                <div className="LogIn_Account">
                    <span>Already have an account? <button className="LogIn_btn">Login here</button></span>
                </div>
                <div className="privacy_policy">
                    <span><input type="checkbox"/> By continuing i agree to the terms of use & privacy policy.</span>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup