import './App.css';
import React, { useEffect } from "react";
import { getAllUsers } from "./Services/crud"
import {useState} from "react"



function App() {

  const [allUsers, setAllUsers] = useState();
  const everyusers = []


  useEffect(() => {
    const fetchAllUsers = async () => {
      const AllPeople = await getAllUsers()
      AllPeople.forEach(user => { 
        everyusers.push(user.username)
        console.log(AllPeople)
        console.log(everyusers)
        console.log(allUsers)
      })
      setAllUsers(AllPeople)
    }
    fetchAllUsers()
  }, [])
    
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
