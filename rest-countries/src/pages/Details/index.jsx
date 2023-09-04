import { useParams } from "react-router-dom";
import countriesServices from "../../services/countriesServices";

import { Link } from "react-router-dom";

const DetailsPage = ({ countries }) => {
    const countryName = useParams().name
    let allCountries = countries


    if(!countries || countries.length === 0) {
        const fetchAll = async () => {
            const data = await countriesServices.fetchAllCountries()
            allCountries = data
        }
        fetchAll()
        return(
            <>Loading countries...</>
        );
    }

    const countryToDisplay = allCountries.find(f => f.name === countryName)

    return (
        <div>
            <Link to={'/'}>
            <button>back</button>
            </Link>

            <div className='country-info-wrapper'>
                <div className='country-flag-wrapper'>
                    <img src="" alt="" />
                </div>
                <div className='country-details-wrapper'>
                    <h1>{countryToDisplay.name}</h1>
                    <div className='details-box'>
                        details...
                    </div>
                    <div className='border-countries-box'>
                        border countries...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage