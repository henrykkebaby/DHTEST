import React, {useState, useEffect } from 'react';
import Index from '../views/index';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../firebase/firebase-config"

function IndexPresenter(props) {

 const [registerEmail, setRegisterEmail] = useState("")
 const [registerPassword, setRegisterPassword] = useState("")
 const [loginEmail, setLoginEmail] = useState("")
 const [loginPassword, setLoginPassword] = useState("")
 
 const [nextPage, setNextPage] = useState(false);
 const [user, setUser] = useState({});
 

 onAuthStateChanged(auth, (currentUser) =>{
   setUser(currentUser)
 })

  async function register(){
  
    
    try{
      const user =  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user)
    }

    catch(error){
      console.log(error.message)
    }
  
  }

  async function login(){
  
    try{
      const user =  await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
    }

    catch(error){
      console.log(error.message)
    }
  
  }

  async function logout(){
    setNextPage(false);
    await signOut(auth);
  }

  function nextPageHandler(){
    setNextPage(true)
  }

    
    
return <Index 
model={props.model} 
registerEmail={registerEmail}
setRegisterEmail = {setRegisterEmail}
registerPassword = {registerPassword}
setRegisterPassword = {setRegisterPassword}
loginEmail = {loginEmail}
setLoginEmail = {setLoginEmail}
loginPassword = {loginPassword}
setLoginPassword = {setLoginPassword}
nextPage = {nextPage}
setNextPage = {setNextPage}
user = {user}
setUser = {setUser}
register = {register}
login = {login}
logout = {logout}
nextPageHandler = {nextPageHandler}
onAuthStateChanged = {onAuthStateChanged}


/>


}

export default IndexPresenter