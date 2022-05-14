import React, { useContext } from 'react';
import './City.css';
import { MainDataContext } from '../../../context/MainDataContext';


const City = () => {
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
        <div className = "MTitleBox">
            <span className='cityTitle' style={stl}>{obj.location.name}</span>
            <span className='timeText' style={stl}>{obj.location.localtime}</span>
        </div>
    );
}

export default City;