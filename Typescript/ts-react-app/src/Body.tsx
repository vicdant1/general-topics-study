import { useUserContext } from "./context/user";

const Body = () => {
  const {state, setState} = useUserContext();
  
  const handleFormSubmit = (e:React.ChangeEvent<any>) => {
    e.preventDefault();
    const data = {... state, ["email"]: e.target.email.value, ["name"]: e.target.name.value}
    
    setState(data);
    console.log("done...")
  }
  
  return(
    <div>
      Name: {state.name} <br/>
      Email: {state.email}
      <hr />
      <h1>ALTERANDO STATE</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br/><br/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Body;