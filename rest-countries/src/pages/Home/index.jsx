import Controls from "../../components/Controls/Controls";
import Results from "../../components/Results/Results";

const Home = ({ uniqueRegions, regionFilter, countryQuery, handleCountryQuery, handleRegionFilter, countries, matchingCountries }) => {




    return (
        <>
            <Controls regions={uniqueRegions} handleCountryQuery={handleCountryQuery} handleRegionFilter={handleRegionFilter} ></Controls>
            
            <Results allCountries={countries} matchingCountries={matchingCountries} countryQuery={countryQuery} regionFilter={regionFilter} ></Results>
        </>
    );
}

export default Home


