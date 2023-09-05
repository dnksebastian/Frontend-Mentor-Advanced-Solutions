import { Link } from 'react-router-dom'
import './countrytile.css'

const CountryTile = ({country}) => {

    return (
        <li className='tile-wrapper'>
            <div className='tile-flag-wrapper'>
                <img className='tile-flag' src={country.flag} alt={`Flag of ${country.name}`} />
            </div>
            <div className='tile-info-wrap'>
                <Link className='tile-link' to={`/country/${country.name}`}>
                    <h3>{country.name}</h3>
                </Link>
                <p><span className='hl-label'>Population:</span> {country.population.toLocaleString()}</p>
                <p><span className='hl-label'>Region:</span> {country.region}</p>
                <p><span className='hl-label'>Capital:</span> {country.capital}</p>
            </div>
        </li>
    );
};

export default CountryTile