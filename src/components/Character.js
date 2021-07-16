// Write your Character component here
import axios from 'axios';
import React, {useState,useEffect} from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
color: #666699;
border: 5px solid  #666699;
font-size: 2rem;
`

export default function Character (props) {
    const {characterData, close} = props;
    const [details,setDetails] = useState(null)

    useEffect(() => {
        const clickHandler =() => {
            console.log('clicked')
        }
        document.addEventListener('click', clickHandler)
        return () => {
            console.log('unmount')
            document.removeEventListener('click', clickHandler)
        }
    },[])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
        .then(res => {
            setDetails(res.data)
        })
        .catch(err => console.log(err))
    }, [characterData])



    return (
        <StyledCharacter>
            <div className = 'character-info'>
                { details &&
                <>
                    <p>Gender: {details.gender}</p>
                    <p>Height: {details.height}</p>
                    <p>Mass: {details.mass}</p>
                    <p>BirthYear: {details.birth_year}</p>
                    <p>Eye Color: {details.eye_color}</p>
                    <p>Hair Color: {details.hair_color}</p>
                    <p>Skin Color: {details.skin_color}</p>
               <button onClick={close}>close</button>
               </>
}
            </div>
            </StyledCharacter>
    )
}
