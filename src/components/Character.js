// Write your Character component here
import axios from 'axios';
import React, {useState,useEffect} from 'react'
import styled from 'styled-components'

export default function Character (props) {
    const {characterData} = props;
    const [details,setDetails] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
        .then(res => {
            console.log(res.data)
            setDetails(res.data)
        })
        .catch(err => console.log(err))
    }, [])



    return (
        
            <div className = 'character-info'>
                 <button onClick={characterData}>
                    <p>Gender: {details.gender}</p>
                    <p>Height: {details.height}</p>
                    <p>Mass: {details.mass}</p>
                    <p>BirthYear: {details.birth_year}</p>
                    <p>Eye Color: {details.eye_color}</p>
                    <p>Hair Color: {details.hair_color}</p>
                    <p>Skin Color: {details.skin_color}</p>
               </button>

            </div>
    )
}
