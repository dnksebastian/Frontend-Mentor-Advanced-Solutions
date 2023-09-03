import './results.css'
import CountryTile from '../CountryTile/CountryTile'

const Results = ({allCountries, matchingCountries}) => {

    return (
        <main id='countrylist-wrapper'>
            { matchingCountries.length > 0 ?
            <ul className='country-result-list'>
                {matchingCountries.map(c => <CountryTile key={c.name} country={c}/>)}
            </ul>
            :
            <ul className='country-result-list'>
                {allCountries.map(c => <CountryTile key={c.name} country={c}/>)}            
            </ul>
            }          
        </main>
    );

};


export default Results