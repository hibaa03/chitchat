import React from 'react';
import GoogleButton from 'react-google-button';
import { auth, firebase } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const style = {
  wrapper: 'flex justify-center',
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful sign-in
      console.log('Successful sign-in:', result.user);
    })
    .catch((error) => {
      // Handle sign-in error
      console.log('Sign-in error:', error);
    });
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton
        className="w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
        onClick={googleSignIn}
      />
    </div>
  );
};

export default SignIn;
