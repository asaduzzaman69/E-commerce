import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component'
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp.component'
import {auth,currentUserUpdateProfile} from './Firebase/firebase.utils'



 class App extends React.Component{
    constructor(){
      super()
      this.state = {
        currentUser:null
      
      }
    };
    unsubscribeFromAuth = null;

    componentDidMount(){
     this.unsubscribeFromAuth =  auth.onAuthStateChanged( async user => {
       if(user) {
        const userRef = await currentUserUpdateProfile(user);
      
        userRef.onSnapshot(el => {
          this.setState({
            currentUser:{id:el.id,
            ...el.data()}
            
            
          })
        })
      
       }
       else{
         this.setState({currentUser:user})
      
       }
      } 
    )
  }

    componentWillUnmount(){
    
     console.log(this.unsubscribeFromAuth());
    
    }
    render(){
      window.m = this.state;
      return (
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
          <Route  exact path="/" component={HomePage} />
          <Route  exact path="/shop" component={ShopPage} />
          <Route  exact path="/SignIn" component={SignInSignUp} />
      
          </Switch>

      
      
        </div>
      )
      
    }

    }

    export default App;

