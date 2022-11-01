import React, { Component, useRef, useState } from "react";

const SimpleForm = () => {
  const [enteredName, setEnteredName] = useState("");

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  const inputNameRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue = inputNameRef.current.value;
    console.log(enteredValue);

    setEnteredName("");
  };
  const myStyles = {
    inputFocus: "yellow",
    inputBackground: "red",
    inputColor: "red",
  };
  const ourStyles = {
    inputFocus: "blue",
    inputColor: "blue",
    inputBackground: "blue",
  };

  const isValid = !enteredNameIsValid ? myStyles : ourStyles;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 bg-light rounded-3 p-2 mt-4">  
          <form onSubmit={formSubmitHandler} className="isValid">
            <label htmlFor="name" className="label-control fw-1 mb-2 fw-1">
              Your Name
            </label>
            <input
              id="name"
              ref={inputNameRef}
              type="text"
              className="form-control w-50 mb-2"
              onChange={nameInputChangeHandler}
              value={enteredName}
            />
            {!enteredNameIsValid && (
              <p className="text-danger fs-4">input a valid name</p>
            )}
            <div className="text-end">
              <button className="btn btn-outline-dark ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SimpleForm;
