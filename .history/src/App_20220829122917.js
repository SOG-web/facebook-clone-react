import React, { useEffect, useState } from 'react';

import Navbar from './components/navbar';
import Login from './pages/Login';
import { fireAuth } from '../firebase';

function App() {
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    console.log(user);
  };

  useEffect(() => {
    const subscriber = fireAuth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <Login />;
}

export default App;
