import { useState, useEffect } from "react";
import axios from 'axios';
const baseUrl = "https://ironbnb-m3.herokuapp.com";


const ApartmentPage = () => {
    const [ apartments, setApartments ] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const apartmentsData = await axios.get(`${baseUrl}/apartments`)
            setApartments(apartmentsData.data)
        }
        fetchData()
    },[])

    return (
        <div>
            <h3>Lists of apartments</h3>
            {
                apartments.map(apartment => (
                  <div key={apartment._id} className="card">
                    <img src={apartment.img} alt="apartment" />
                    <h3>{apartment.title}</h3>
                    <p>Price: {apartment.pricePerDay}</p>
                  </div>
                ))
            }
        </div>
    )
}

export default ApartmentPage;