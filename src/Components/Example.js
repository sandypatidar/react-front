import { useState } from "react";

function Example() {
  function submitForm(e) {
    console.log(name, interest, status);
    if (name.length<3 || !status || interest == "select Option") {
        alert("please enter correct value")
    } else {
        alert("All Good :)")
    }
    e.preventDefault();
  }

  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);
  const [interest, setInterest] = useState("");

  const [nameErr, setNameErr] = useState(false)
  const [interestErr, setInterestErr] = useState(false)
  const [statusErr, setStatusErr] = useState(false)

  function userNameHandler(e) {
      let name = e.target.value;
      if (name.length <3) {
        setNameErr(true)
      } else {
          setNameErr(false)
      }
      setName(name)
  }
  function interestHandler(e) {
      let interest = e.target.value
      if (interest === 'select Option') {
        setInterestErr(true)
      } else {
        setInterestErr(false)
      }
      setInterest(interest)
  } 
  function statusHandler(e) {
      let status = e.target.checked
      if (!status) {
        setStatusErr(true)
      } else {
        setStatusErr(false)
      }
      setStatus(status)
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        Name:
        <input type="text" onChange={userNameHandler}></input><br/> {nameErr?<span>Please Enter valid Name</span>:""} 
        <br />
        <br />
        Select:
        <select onChange={interestHandler}>
          <option> select Option </option> <option> Marvel </option>
          <option> DC </option> <option> Other </option>
        </select> {interestErr?<span>Please select Best Movies</span>:""}
        <br />
        <br />
        <input type="checkbox" onChange={statusHandler} />
        <span> Turn and conditions </span> <br /> {statusErr?<span>Please Select Term and Conditions.</span>:""}
        <br />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default Example;
