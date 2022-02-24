import React, { useState } from 'react'
import { Todo } from './model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import TodoList from './TodoList'

interface Props{
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id:number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  
  const handleEdit = (e: React.FormEvent, id:number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  }

  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {
        edit?(
          <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos__single-test"/>
        ):
        (
          !todo.isDone ? (
            <span className="todos__single--text">
              {todo.todo}
            </span>
    
          ) : (
            <s className="todos__single--text">
              {todo.todo}
            </s>
          )
        )
      }
      <div>
        <span className="icon" onClick={ () => {
            if(!edit && !todo.isDone){
              setEdit(!edit)
            }
          }
        }>
          <AiFillEdit/>
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id) }>
          <AiFillDelete/>
        </span>
        <span className="icon" onClick={() => handleDone(todo.id) }>
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo