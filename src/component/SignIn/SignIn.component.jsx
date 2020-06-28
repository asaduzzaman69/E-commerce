import React from 'react'
import './SignIn.styles.scss'
import FormInput from '../Form-input/Form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle,auth} from '../../Firebase/firebase.utils'



class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }

          

    }
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password}= this.state
         await auth.signInWithEmailAndPassword(email, password)

         
        this.setState({email:'',password:''})
    }
    handleChange = e => {
        const {name,value} = e.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I have already have an account</h2>
                <span>sign in with your E-mail and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name='email' 
                     type='email' 
                     value={this.state.email}
                     required
                     handleChange={this.handleChange}
                     label='email'
                     />

                    <FormInput
                     name='password' 
                     type='password' 
                     value={this.state.password}
                     handleChange={this.handleChange}
                     label='password'
                     />

                     <div className="buttons">

                    <CustomButton type="submit"> Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} type="submit" isGoogleSignIn> Sign In</CustomButton>
                     </div>

                   

                </form>


            </div>
        )
    }


}

export default SignIn;
