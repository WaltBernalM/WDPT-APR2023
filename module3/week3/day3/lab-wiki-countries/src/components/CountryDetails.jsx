import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const CountryDetails = (props) => {
    const { countries } = props;
    const { countryId } = useParams();
    const [ clickedCountry, setClickedCountry] = useState(null);

    useEffect(() => {
        const fetchOneCountry = async () => {
            const url = `https://ih-countries-api.herokuapp.com/countries/${countryId}`
            const country = await axios.get(url);
            console.log('country.data: ', country.data);
            setClickedCountry(country.data)
        }
        fetchOneCountry()
    }, [countryId])

    if(!clickedCountry) {
        return (<p className="col-7"> Loading ...</p>)
    }

    function getCountryName(code) {
        const country = countries.find(c => c.alpha3Code === code)
        return country.name.common;
    }
    
    // const clickedCountry = countries.find(country => country.alpha3Code === countryId);
    
    console.log('clickedCountry: ', clickedCountry);
    return (
        <>
        <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${clickedCountry.alpha2Code.toLowerCase()}.png`}
            alt={`flag-of-${clickedCountry.name.common}`}
            style={{ width: '100px' }}
        />
        <h1>{clickedCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={ { width: '30%' } }>Capital</td>
              <td>{clickedCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {clickedCountry.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {
                        clickedCountry.borders.map(alpha3Code => (
                            <li key={alpha3Code}>
                                <Link to={`/${alpha3Code}`}>{getCountryName(alpha3Code)}</Link>
                            </li>
                        ))
                    }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        </>
    )
}

export default CountryDetails;


