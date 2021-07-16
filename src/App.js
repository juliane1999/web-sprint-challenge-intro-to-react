import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([])


  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
  }, [])

 const Characters = props => (
   <div className = 'character'>
     <button Onclick = {() => (props.data.name)}>{props.data.name}</button>
   </div>
 )


  return (
    <div className="App">
    <h1 className="Header">Characters</h1>
    {
      data.map(dat => {
        return <Characters key={dat.name} data={dat} />
      })
    }
    </div>
  )
  
    
        
  }
export default App;
