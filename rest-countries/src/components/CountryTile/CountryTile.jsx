import { Link } from 'react-router-dom'
import './countrytile.css'

const CountryTile = ({country}) => {

    const nameSimplified = country?.name.split('(');

    return (
        <li className='tile-wrapper'>
            <div className='tile-flag-wrapper'>
                <img className='tile-flag' src={country.flag || ''} alt={`Flag of ${nameSimplified[0] || country.name || ''}`} />
            </div>
            <div className='tile-info-wrap'>
                <Link className='tile-link' to={`/country/${country.alpha3Code}`}>
                    <h3>{nameSimplified[0] || country.name}</h3>
                </Link>
                <p><span className='hl-label'>Population:</span> {country.population.toLocaleString() || ''}</p>
                <p><span className='hl-label'>Region:</span> {country.region || ''}</p>
                <p><span className='hl-label'>Capital:</span> {country.capital || ''}</p>
            </div>
        </li>
    );
};

export default CountryTile