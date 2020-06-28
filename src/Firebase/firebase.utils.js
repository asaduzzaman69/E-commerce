import firebase from 'firebase/app' 
import 'firebase/auth'
import 'firebase/firestore'

const DbConfig = {
    apiKey: "AIzaSyDrTJvuo7LD_ry3U-1cnDzNJn6SduP8_MM",
    authDomain: "crown-clothin.firebaseapp.com",
    databaseURL: "https://crown-clothin.firebaseio.com",
    projectId: "crown-clothin",
    storageBucket: "crown-clothin.appspot.com",
    messagingSenderId: "923610363039",
    appId: "1:923610363039:web:58b2c65cfd16d4a03b1eaa",
    measurementId: "G-GBX8HWWRE7"
}

export const currentUserUpdateProfile = async (userAuth,...additionalData) => {
    if(!userAuth) return;

    const userRef =  firestore.doc(`user/${userAuth.uid}`) 
    console.log(userRef)
    const sanpshot = await userRef.get()

    if(!sanpshot.exists){
        const {displayName,email} = userAuth;
        const CreatedAt  = new Date();

       await userRef.set({
            displayName,
            email,
            CreatedAt,
            ...additionalData
        })
        
    }
    console.log(additionalData)

    return userRef;

}
firebase.initializeApp(DbConfig);
 export const auth = firebase.auth();
 export const firestore = firebase.firestore()
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider)

 export default auth;

