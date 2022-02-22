import React from 'react';
import Header from './Header';
import { UserContextProvider } from './context/user';
import Body from './Body';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Header title='Abluble' color='#333333'/>
        <Body/>
      </div>
    </UserContextProvider>
  );
}

export default App;
