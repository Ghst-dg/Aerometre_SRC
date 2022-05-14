import React, {useContext} from 'react';
import './MDTitle.css';
import { MainDataContext } from '../../../../../../context/MainDataContext';

const MDtitle = (props) => {
    const {obj} = useContext(MainDataContext);
    let clr = {'color' : 'black'}
    if(obj.current.is_day === 0)
    {
        clr = {'color' : '#e6e6e6'}
    }

    return (
        <div className = "miniTitle">
            <span className='miniTitleText' dangerouslySetInnerHTML={{__html: props.text}} style = {clr}/>
        </div>
    );
}

export default MDtitle;