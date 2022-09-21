import React, { createContext } from "react";
import ComA from "./ComA";


const FirstName = createContext();
const LastName = createContext();
const App = () =>{

  const fname = "Shahid";
  const lname = "Siddiqui";

  return (
    <>
    <FirstName.Provider value={fname}>
    <LastName.Provider value={lname}>
      <ComA />
    </LastName.Provider>
      
    </FirstName.Provider>
    </>
    
  );
}

export default App;

export {FirstName, LastName};
