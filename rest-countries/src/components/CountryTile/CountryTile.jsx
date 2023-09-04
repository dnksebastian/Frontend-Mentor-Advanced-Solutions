import { Link } from 'react-router-dom'
import './countrytile.css'

const CountryTile = ({country}) => {

    return (
        <li className='tile-wrapper'>
            <div className='tile-flag-wrapper'>
                <img src={country.flag} alt={`Flag of ${country.name}`} />
            </div>
            <div className='tile-info-wrap'>
                <Link to={`/country/${country.name}`}>
                    <h3>{country.name}</h3>
                </Link>
                <p><span>Population:</span> {country.population}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital:</span> {country.capital}</p>
            </div>
        </li>
    );
};

export default CountryTile