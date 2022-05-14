import React, {useContext} from 'react';
import './MCenter.css';
import Day from './day/Day';
import Night from './night/Night';
import { MainDataContext } from '../../../context/MainDataContext';

const MCenter = () => {
    const {obj} = useContext(MainDataContext);

    const func = () => {
        if(obj.current.is_day === 1)
            return (<Day/>);

        else if(obj.current.is_day === 0)
            return (<Night/>);

        else
            return (<img src = "clipart2.png" alt = "." height = "75%"/>)
    }

    return (
        <div className = "MCenter">
            {func()}
        </div>
    );
}


export default MCenter;