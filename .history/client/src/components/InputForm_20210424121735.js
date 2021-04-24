import React, { useState } from 'react'
import API from '../utils/API'

const InputForm = (props) => {

    const handleNewStop = () => {
        API.createPoint({
            marker: props.marker,
            location: "Green Mill",
            details: "Saxophones are forbidden"
        })
            .then(response => response.push('/'))
            .catch(err => console.log(err))

    }

    return (
        <form onSubmit={handleNewStop}>
            <label>New Stop {props.marker}</label>
            <br />
            <input type="text" name="location" placeHolder="Location" value={location} />
            <input type="text" name="details" placeholder="Details" value={details} />
            <br />
            <button type="button" onClick={handleNewStop}>Submit</button>
        </form>
    )
}

export default InputForm