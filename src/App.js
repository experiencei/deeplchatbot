import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { auth } from './components/firebase/Firebase';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { selectUser , login , logout}from "./features/userSlice"
import Login from './components/login/Login';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(( authUser) => {
      if(authUser) {
        dispatch(login({
          uid :authUser.uid,
          photo : authUser.photoUrl,
          email : authUser.email,
          displayName : authUser.displayName
        }))
      } else{
         dispatch(logout());
      }
    })
  } , [dispatch])
  return (
    <div className="app">
    {
      user ? 
     ( <>
      <Sidebar/>
       <Chat/>
      </>) : (
        <Login/>
      )
    }
    </div>
  );
}

export default App;
