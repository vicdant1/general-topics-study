import React, { useState } from "react";

interface DataFormMock {
  email: string;
  password: string;
  message: string;
  brand: string;
  price: number;
}

const BasicForm: React.FC<DataFormMock> = (mockData) => {
  const defaultFields = {
    email: "",
    password: "",
    message: "",
    brand: "",
    price: 0
  };

  const [dataForm, setDataForm] = useState<DataFormMock>(
    mockData || defaultFields
  );

  //@ts-ignore
  const handleInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.target.name != "")
      setDataForm({ ...dataForm, [e.target.name]: e.target.value });
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

        <label htmlFor="message">Message</label>
        <textarea
          className="form-control mt-2"
          name="message"
          id="message"
          cols={30}
          rows={6}
          placeholder="Message"
          onChange={(e) => handleInput(e)}
          value={dataForm.message}
        ></textarea>

        <label htmlFor="brand">Brand</label>
        <select className="form-control" value={dataForm.brand}
        onChange={(e) => handleInput(e)} name="brand">
            <option value="abluble">abluble</option>
            <option value="oracle">oracle</option>
            <option value="microsoft">microsoft</option>
            <option value="dell">dell</option>
        </select>


        <label htmlFor="price" className="form-label">Ranger</label>
        <input name="price" type="range" className="form-range" id="price" onChange={(e) => handleInput(e)}></input>
        
        {dataForm.price == 0 ? (<div>No data :'/</div>) : (<div className="text-center ">U$ {dataForm.price}</div>)}

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default BasicForm;
