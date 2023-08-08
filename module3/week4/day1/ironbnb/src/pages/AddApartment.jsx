import { useState } from "react";
import { baseUrl } from "../utils/constants";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const initialForm = {
    headline: '',
    img: '',
    pricePerDay: 0
}
const AddApartment = () => {
    const  [ formData, setFormData ] = useState(initialForm);

    const navigate = useNavigate()

    const handleForm = (inputName, value) => {
        setFormData( (prevData) => ( { ...prevData, [inputName]: value })  )
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            img: formData.img,
            title: formData.headline,
            pricePerDay: formData.pricePerDay
        }
        const response = await axios.post(baseUrl + '/apartments', body)
        console.log('response: ', response);
        navigate('/')
        setFormData(initialForm)


    }

    console.log('formData: ', formData);

    return (
        <div className="AddApartmentPage">
            <h3>Add New Apartment</h3>
            <form onSubmit={handleSubmit} >
                <label>Title</label>
                <input
                    onChange = { (e) => handleForm('headline', e.target.value) } 
                    type="text" 
                    name="headline" 
                    id="headline"
                    value={formData.headline} 
                />

                <label>Photo</label>
                <input 
                    onChange = { (e) => handleForm('img', e.target.value) } 
                    type="text" 
                    name="img" 
                    id="img" 
                    value={formData.img}
                />

                <label>Price per Day</label>
                <input 
                    onChange = { (e) => handleForm('pricePerDay', e.target.value) } 
                    type="number" 
                    name="pricePerDay" 
                    id="pricePerDay"
                    value={formData.pricePerDay} 
                />
                <button type="submit">Create Apartment</button>
            </form>
        </div>
    )
}

export default AddApartment;