import React, { useState } from "react";

interface DataFormMock {
  email?: string;
  password?: string;
  message?: string
}

const BasicForm: React.FC<DataFormMock> = (mockData) => {
  const defaultFields = {
    email: "",
    password: "",
    message: ""
  };

  const [dataForm, setDataForm] = useState<DataFormMock>(mockData || defaultFields);

  //@ts-ignore
  const handleInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.target.name !== "")
      setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    console.log(mockData)
  };

  //@ts-ignore
  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert(`submitting data from form`);
    setDataForm(defaultFields);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-2 d-flex flex-column m-auto"
        style={{ width: "400px" }}
      >
        <label htmlFor="email">Email</label>
        <input
          value={dataForm.email}
          onChange={(e) => handleInput(e)}
          type="text"
          name="email"
          id="email"
          placeholder="abluble@abluble.com"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={dataForm.password}
          onChange={(e) => handleInput(e)}
          type="password"
          name="password"
          placeholder="**********"
          required
          id="password"
        />

        <textarea className="form-control mt-2" name="message" id="message" cols={30} rows={6} placeholder="Message" onChange={(e) => handleInput(e)} defaultValue={dataForm.message}></textarea>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default BasicForm;
