import './controls.css';
import Select from 'react-select'

const Controls = ({ regions, handleCountryQuery}) => {

    const regionsToObj = regions.map(r => {
        return {
            value: r.toLowerCase(),
            label: r
        }
    })

    return (
        <form id='controls-wrap'>
            <label>
            <p>Country query input</p>
            <input type="text" placeholder='Search for a country...' onChange={handleCountryQuery}/>
            </label>

            <label>
                <p>Region filter</p>
                <Select options={regionsToObj}/>
            </label>
        </form>
    )
};


export default Controls