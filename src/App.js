import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components';

const StyledApp = styled.div`
border: 5px solid black;
background-color:transparent;
height: 100%;
width:100%;

button{
background-color:#3c6e71;
padding:1rem;
margin:0.5rem;
width:auto;
color:blue;
font-size:2rem;
border-radius:15px;
}
`



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([])
  const [nameId,setNameId] = useState(null)
  
  const openDiv = open => {
    setNameId(open)
  }
  const closeDiv = () => {
    setNameId(null)
  }


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
     <button onClick = {() => openDiv(props.data)}>{props.data.name}</button>
   </div>
 )


  return (
    <div className="App">
      <StyledApp>
    <h1 className="Header">Characters</h1>
    {
      data.map(dat => {
        return <Characters key={dat.name} data={dat} />
      })
    }
    {
      nameId && <Character characterData={nameId} close={closeDiv} />
    }
    </StyledApp>
    
    </div>
  )
  
    
        
  }
export default App;
