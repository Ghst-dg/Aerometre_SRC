import React, {useContext} from 'react';
import './header.css';
import City from './city/City';
import MSearch from './search/MSearch';
import {IoArrowBackOutline} from 'react-icons/io5'
import { MainDataContext } from '../../context/MainDataContext';

const MHeader = () => {
    const {obj} = useContext(MainDataContext);

    const func = () =>{
        document.querySelector('.landing').style.setProperty('display', 'flex');;
        document.querySelector('.main').style.setProperty('display', 'none');
    }

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
        <div className = "MHeader">
            <City/>
            <MSearch/>
            <button className='backButton' onClick={func} style = {stl}><IoArrowBackOutline/></button>
        </div>
    );
}

export default MHeader;