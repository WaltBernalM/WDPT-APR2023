import { Link } from 'react-router-dom';

const CountriesList = (props) => {
    const { countries} = props;

    return (
        <div className="list-group">
            {
                countries.map((country, i) => {
                    const countryFlaImg = (
                        <img
                            width={20}
                            alt={country.name.common}
                            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        />
                    )
                    return (
                        <Link 
                            key={country.alpha3Code}
                            className="list-group-item list-group-item-action"
                            to={`/${country.alpha3Code}`}
                        >{countryFlaImg}  {country.name.common} </Link>  
                    )
                })
            }   
        </div>
    )
}

export default CountriesList;