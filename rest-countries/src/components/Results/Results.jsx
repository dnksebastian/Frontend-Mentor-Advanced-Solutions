import './results.css'
import CountryTile from '../CountryTile/CountryTile'

const Results = ({ allCountries, matchingCountries, countryQuery, regionFilter }) => {

    if(!countryQuery && !regionFilter) {
        return (
            <main id='countrylist-wrapper'>
            <ul className='country-result-list'>
                {allCountries.map(c => <CountryTile key={c.name} country={c}/>)}
            </ul>          
        </main>
        )
    }

    return (
        <main id='countrylist-wrapper'>
        { matchingCountries.length > 0 ?
        <ul className='country-result-list'>
            {matchingCountries.map(c => <CountryTile key={c.name} country={c}/>)}
        </ul>
        :
        <div className='result-info'>
            <p>Could not find any results for selected criteria... </p>         
        </div>
        }          
    </main>
    );

};


export default Results