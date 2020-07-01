import React from 'react';
import './App.css';
import {Route,Switch, Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component'
import { connect } from 'react-redux'
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
          <Route  exact path="/" component={HomePage} />
          <Route  exact path="/shop" component={ShopPage} />
          <Route  exact path="/SignIn" render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp /> } />
      
          </Switch>

      
      
        </div>
      )
      
    }

 }
    const mapStateToProps = state => (
      {
        currentUser:state.user.currentUser
      }
    )
    const mapDispatchToProps = dispatch => ({
      setCurrentUser:user =>dispatch(setCurrentUser(user))
    })

    export default connect(mapStateToProps,mapDispatchToProps)(App);

