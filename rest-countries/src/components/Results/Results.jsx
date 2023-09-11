import './results.css'
import CountryTile from '../CountryTile/CountryTile'
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed';

const Results = ({ allCountries, matchingCountries, countryQuery, regionFilter }) => {

    const firstFourCountries = allCountries.slice(0, 4)

    
    if(!allCountries) {
        return (
            <>Loading data...</>
        )
    }

    if(!countryQuery && !regionFilter) {
        return (
            <main id='countrylist-wrapper'>
            <RecentlyViewed allCountries={allCountries} />
            {/* <h2 className='ac-label'>All countries</h2> */}
            <ul className='country-result-list'>
            {/* {allCountries.map(c => <CountryTile key={c.name} country={c}/>)} */}
            {firstFourCountries.map(c => <CountryTile key={c.name} country={c}/>)}
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