import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import BasicForm from "./components/BasicForm";
import Counter from "./components/Counter";

const App = () => {
  const [showCounter, setShowCounter] = useState<boolean>(false);
  const [randomInputState, setRandomInputState] = useState<string>("");

  
  const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  interface IInputs {
    email: string,
    password: string,
    age: number
    gender: string
  }
  
  const { register, handleSubmit, setFocus, formState: {errors} } = useForm<IInputs>(
    {
      mode: 'onChange',
      reValidateMode: 'onChange',
      defaultValues: {},
      resolver: undefined,
      context: undefined,
      criteriaMode: "firstError",
      shouldFocusError: true,
      shouldUnregister: true
    }
  );

  const onSubmitValidationForm = (data:any) => {
    console.log(data)
  }

  const calcBoolean = useMemo(() => {
    console.log("calc boolean");
    if (showCounter == true) return "TRUE";
    else return "FALSE";
  }, [showCounter]);


  return (
    <>
      <h4 className="text-center mt-2">Estudando Formularios React</h4>
      <BasicForm
        email="abluble@abluble.com"
        password="123123123"
        brand="oracle"
        message="fonclbriscph"
        price={2}
      />
      <br />
      <h4 className="text-center mt-2">
        Study ReactHooks and Context Stuff(ContextAPI || Redux)
      </h4>
      <button
        onClick={() => setShowCounter(!showCounter)}
        className="btn btn-primary"
      >
        {!showCounter ? "Show" : "Close"} Counter
      </button>
      {showCounter && <Counter />}
      <hr />
      calcBoolean does not depends on any other state change than showCounter,
      so we could memo this value and just listen to showCounter changes. <br />
      {calcBoolean}
      <input
        type="text"
        name="random"
        id="random"
        onChange={(e) => setRandomInputState(e.target.value)}
      />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-12 my-5 d-flex justify-content-center">
            <form onSubmit={handleSubmit((data) => onSubmitValidationForm(data))} className="validationForm" autoComplete="false">
              <label htmlFor="email">Email*</label>
              <input className="form-control" placeholder="Email" {...register("email", {required: "Email is a required field", pattern: {value: emailRegex, message: 'Please, enter a valid email'}})}/>
              {errors.email && <p>{errors.email.message}</p>}

              <label htmlFor="password">Password*</label>
              <input className="form-control" type="password" placeholder="Password" {...register("password", {required: "This is required"})} />
              {errors.password && <p>{errors.password.message}</p>}

              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="age">Age*</label>
                  <input className="form-control" type="number" placeholder="Age" {...register("age", {required: "This is required", min: {value: 18, message: "You should be at least 18yo"}, max: {value: 99, message: "You should be less than 99"}})}/>
                  {errors.age && <p>{errors.age.message}</p>}
                </div>
                <div className="col-md-6">
                  <label htmlFor="gender">Gender*</label>
                  <select className="form-control" defaultValue="-1" placeholder="Gender" {...register("gender", {required: "This is required", pattern: {value: /[A-Z]/, message: "Select a gender"}})}>
                    <option value="-1">Pick a gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                  {errors.gender && <p>{errors.gender.message}</p>}
                </div>
              </div>
              <div className="w-100 d-flex justify-content-end">
                <button className="btn btn-primary mt-3">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
