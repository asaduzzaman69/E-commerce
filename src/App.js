import React from 'react';
import './App.css';
import {Route,Switch, Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckOut from './pages/checkout/checkOut.component'
import Header from './component/header/header.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { currenUserSelector } from './redux/user/user.selector'
import { setCurrentUser } from './redux/user/user.action'
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp.component'
import {auth,currentUserUpdateProfile} from './Firebase/firebase.utils'



 class App extends React.Component{
    
    unsubscribeFromAuth = null;

    componentDidMount(){
      const { setCurrentUser } = this.props
     this.unsubscribeFromAuth =  auth.onAuthStateChanged( async user => {
       if(user) {
        const userRef = await currentUserUpdateProfile(user);
      
        userRef.onSnapshot(el => {
          setCurrentUser({id:el.id,
            ...el.data()})
            
            
        })
      
       }
       else{
        setCurrentUser(user)
      
       }
      } 
    )
  }

    componentWillUnmount(){
    
     console.log(this.unsubscribeFromAuth());
    
    }
    render(){
      return (
        <div>
          <Header />
          <Switch>
          CheckOut
          <Route  exact path="/" component={HomePage} />
          <Route   path="/shop" component={ShopPage} />
          <Route  exact path="/checkout" component={CheckOut} />
          <Route  exact path="/SignIn" render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp /> } />
      
          </Switch>

      
      
        </div>
      )
      
    }

 }
    const mapStateToProps = createStructuredSelector (
      {
        currentUser:currenUserSelector
      }
    )
    const mapDispatchToProps = dispatch => ({
      setCurrentUser:user =>dispatch(setCurrentUser(user))
    })

    export default connect(mapStateToProps,mapDispatchToProps)(App);

