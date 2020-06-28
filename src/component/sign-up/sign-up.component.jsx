import React from 'react'

import './sign-up.component.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {auth,currentUserUpdateProfile} from '../../Firebase/firebase.utils'
import FormInput from '../Form-input/Form-input.component'

class SignUp extends React.Component {
    constructor(){
        super()

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit = async e => {
        const {email,password,displayName} = this.state;
        e.preventDefault();
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        await currentUserUpdateProfile(user,{displayName});
        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''

        })


    }

    handleChange = e => {
        const {name,value} = e.target;
        this.setState({[name]:value})
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>

                <h2 className="title">i do not have a account</h2>
                <span>sign up with your email and passwor</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    handleChange={this.handleChange}
                    label='email'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    handleChange={this.handleChange}
                    label='Password'
                    required
                    />
                   <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={this.handleChange}
                    label='confirmPassword'
                    required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>

            </div>

        )
    }
}
export default SignUp;


