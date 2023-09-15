import React from 'react';
import SignIn from './SignIn';
import LogOut from './LogOut';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../styles/navbar.css'; // Import the CSS file

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="nav">
      <h1 className="heading">ChitChat</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
