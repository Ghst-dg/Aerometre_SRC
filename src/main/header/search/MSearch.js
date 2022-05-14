import React, {useContext} from 'react';
import './MSearch.css';
import Search from '../../../search/Search'
import { MainDataContext } from '../../../context/MainDataContext';


const MSearch = () => {
    const {obj} = useContext(MainDataContext);
    let stl = {
        'color' : 'black'
    }

    if(obj.current.is_day === 0)
    {
        stl = {
            'color' : 'white'
        }
    }

    return (
        <div className = "MSearchBox" style = {stl}>
            <Search/>
        </div>
    );
}

export default MSearch;