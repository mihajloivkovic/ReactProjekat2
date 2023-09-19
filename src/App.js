import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Teams from './pages/Teams';

function App() {
  const[teams,setTeams]= useState([]);
  const fetchTeams = async ()=>{
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League');
    const data  = await response.json();
    setTeams(data.teams);
    console.log(data.teams);
}

useEffect(()=>{
    fetchTeams();
}, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path="/contact" element={<Contact />}/>
        <Route path="/teams" element={<Teams teams= {teams}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
