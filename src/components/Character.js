// Write your Character component here
import React from 'react'
import styled from 'styled-components'

export default function Character (props) {
    const {characterData} = props;

    return (
        <div className = 'character-container'>
            <div className = 'character-info'>
                <div>
                    <p>Gender: {characterData.gender}</p>
                    <p>Height: {characterData.height}</p>
                    <p>Mass: {characterData.mass}</p>
                    <p>BirthYear: {characterData.birth_year}</p>
                    <p>Eye Color: {characterData.eye_color}</p>
                    <p>Hair Color: {characterData.hair_color}</p>
                    <p>Skin Color: {characterData.skin_color}</p>
                </div>

            </div>

        </div>
    )
}
