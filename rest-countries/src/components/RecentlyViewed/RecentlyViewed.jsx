import { useContext, useState } from 'react';
import CountriesContext from '../../contexts/CountriesContext';

import CountryTile from "../CountryTile/CountryTile"
import './recentlyviewed.css'


const RecentlyViewed = () => {
    const context = useContext(CountriesContext)
    const visitedPages = context[1]

    const [ listVisible, setListVisible ] = useState(true);
    const hideWhenVisible = {display: listVisible ? 'none' : ''}
    const showWhenVisible = {display: listVisible ? '' : 'none'}


    if(!visitedPages || visitedPages.includes(undefined) || visitedPages.includes(null)) {
        return null
    }


    return (
        <>
        <div className='rv-label-helper'>
        <h2 className='rv-label'>Recently viewed</h2>
        <div style={hideWhenVisible}>
        <button className='btn btn-toggle-recent' onClick={() => setListVisible(true)}><i className='fa-solid fa-plus'></i></button>
        </div>
        <div style={showWhenVisible}>
        <button className='btn btn-toggle-recent' onClick={() => setListVisible(false)}><i className='fa-solid fa-minus'></i></button>
        </div>

        </div>


        <div style={showWhenVisible}>
        <ul className='recent-views-list'>
            { visitedPages.map(p => <CountryTile key={p.name} country={p} />) }
        </ul>
        </div>
        </>
    )
}

export default RecentlyViewed