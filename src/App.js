import "./App.css";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(error=>{
      setUser({})
    })
  };
  return (
    <div className="App">
      {
        !user.email ? <button onClick={handleGoogleSignIn}>Google Sign In</button> : <button onClick={handleGoogleSignOut}>Sign Out</button>
      }
      
      
      <h1>Name : {user.displayName}</h1>
    </div>
  );
}

export default App;
