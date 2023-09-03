import './countrytile.css'

const CountryTile = ({country}) => {
    return (
        <li>
            {country.name}
        </li>
    );
};

export default CountryTile