import React, { useState } from 'react';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
// import Header from './Header';
// import { UserContextProvider } from './context/user';
// import Body from './Body';

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) => { 
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), isDone: false, todo}]);
      setTodo("");
    }
  }

  return (

    // <UserContextProvider>
    //   <div className="App">
    //     <Header title='Abluble' color='#333333'/>
    //     <Body/>
    //   </div>
    // </UserContextProvider>
    
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
