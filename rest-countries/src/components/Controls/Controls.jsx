import './controls.css';
import Select from 'react-select'

const Controls = ({ regions, handleCountryQuery,handleRegionFilter }) => {

    const regionsToDisplay = regions.filter(r => r !== 'Polar' && r !== 'Antarctic Ocean' && r !== 'Antarctic').sort((a, b) => a.localeCompare(b))

    const regionsToObj = regionsToDisplay.map(r => {
        return {
            value: r.toLowerCase(),
            label: r
        }
    })

    return (
        <form id='controls-wrap'>
            <label id='query-label'>
            <p className='sr-only'>Country query input</p>
            <input className='query-input' type="text" placeholder='Search for a country...' onChange={handleCountryQuery}/>
            </label>

            <label>
                <p className='sr-only'>Region filter</p>
                <Select placeholder="Filter by Region" options={regionsToObj} onChange={handleRegionFilter} defaultValue={''} isClearable isSearchable={false} unstyled className='filter-input'  classNamePrefix='react-select' />
            </label>
        </form>
    )
};


export default Controls