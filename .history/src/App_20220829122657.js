import React, { useEffect, useState } from 'react';

import Navbar from './components/navbar';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    console.log(user);
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <Login />;
}

export default App;
