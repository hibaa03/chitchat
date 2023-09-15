import React from 'react';
import { auth } from '../firebase';

const LogOut = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <button className="logout-button" onClick={signOut}>
      Logout
    </button>
  );
};

export default LogOut;
