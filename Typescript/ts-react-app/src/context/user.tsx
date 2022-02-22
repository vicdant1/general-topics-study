import React, {createContext, useContext, useState} from "react";

type UserType = {
  name:string,
  email:string,
  password:string
};

type PropsUserContext = {
  state:UserType,
  setState:React.Dispatch<React.SetStateAction<UserType>>
};

const contextDefaultValue = {
  state:{
    name:"Abluble",
    email:"abluble@abluble.com",
    password:"1d231ad231da"
  },
  setState:() => {}
};

const UserContext = createContext<PropsUserContext>(contextDefaultValue);

// sera exportado para envolver a aplicacao
export const UserContextProvider:React.FC = ({children}) => {
  const [state, setState] = useState(contextDefaultValue.state)
  return(
    <UserContext.Provider value={{state, setState}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
}

