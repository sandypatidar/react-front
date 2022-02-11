/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";

function Profile() {
  
  const [loggedIn, setLoggedIn] = useState(0);
  const [inn, setInn] = useState(0);
  useEffect(() => {
    console.log("Profile useEffect has called by loggedIn")
  },[loggedIn])

  useEffect(() => {
    console.log("Profile useEffect has called by inn")
  },[inn])
  return (
    <div>
      <h1>inn value = {inn}</h1><br/><br/>
      {loggedIn == 1 ? (
        <h2>welcome user1</h2>
      ) : loggedIn == 2 ? (
        <h2>welcome user2</h2>
      ) : loggedIn == 3 ? (
        <h2>welcome user3</h2>
      ) : (
        <h2>welcome guest user</h2>
      )}
      <button onClick={()=>setLoggedIn(loggedIn+1)}>value+</button> <br/><br/>
      <button onClick={()=>setLoggedIn(loggedIn-1)}>value-</button><br/><br/>
      <button onClick={()=>setInn(inn-1)}>Inn ++</button><br/><br/>
    </div>
  );
}

export default Profile;
