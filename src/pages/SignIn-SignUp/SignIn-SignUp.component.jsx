import React from 'react'
import './SignIn-SignUp.styles.scss'
import SignIn from '../../component/SignIn/SignIn.component'
import SignUp from '../../component/sign-up/sign-up.component'

const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>
       <SignIn />
       <SignUp />
    </div>
);

export default SignInSignUp;