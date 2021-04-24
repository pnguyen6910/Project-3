import React from 'react'
import API from '../utils/API'

const InputForm = () => {
    addMarker = (e) => {
        console.log(e)
        console.log(e.latlng.lat, e.latlng.lng)
        this.setState({
            marker: [...e.latlng, form.body],
            renderingInput: true
        })
        //on submit you want the body and details along with the latlng to beput into the db
        // const { marker } = this.state
        // marker.push([e.latlng.lat, e.latlng.lng])
        // this.setState({ marker })
        // API.createPoint({ marker })
        //     .then(response => response.push('/'))
        //     .catch(err => console.log(err))
    }

    return (
        <form>
            <label>
                New Stop
            <input type="text" name="name" />
            </label>
            <input type="text" name="location" />
            <input type="text" name="details" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default InputForm