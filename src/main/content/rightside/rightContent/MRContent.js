import React, {useContext} from 'react';
import './MRContent.css';
import { MainDataContext } from '../../../../context/MainDataContext';

const MRContent = (props) => {
    const {obj} = useContext(MainDataContext);
    let txt = '-'

    if(props.isW === '1')
    {
        txt = `${props.data} <sup><sup>&deg;</sup>C</sup>`
    }

    if(props.isW === '0')
    {
        txt = `${props.data}`;
        txt = Math.round(txt);
        if(isNaN(txt))
        {
            txt = '-'
        }
    }

    let clr = {
        'color' : 'black'
    }

    if(obj.current.is_day === 0){
        clr = {
            'color' : 'white'
        }
    }

    return (
        <div className = "MRC">
            <span className = "mrcText" dangerouslySetInnerHTML={{__html : txt}} style={clr}/>
        </div>
    );
}

MRContent.defaultProps = {
    text : "-"
}

export default MRContent;