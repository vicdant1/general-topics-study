import React from 'react';
import InputField from './components/InputField';
// import Header from './Header';
// import { UserContextProvider } from './context/user';
// import Body from './Body';

const App:React.FC = () => {
  return (
    // <UserContextProvider>
    //   <div className="App">
    //     <Header title='Abluble' color='#333333'/>
    //     <Body/>
    //   </div>
    // </UserContextProvider>
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField/>
    </div>
  );
}

export default App;
