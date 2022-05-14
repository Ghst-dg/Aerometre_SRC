import React, { useContext } from 'react';
import './MLIcon.css';
import { MainDataContext } from '../../../../context/MainDataContext';



const MLIcon = (props) => {
    const {obj} = useContext(MainDataContext);
    const chck = obj.current.is_day;

    const dim = {
        1000 : 'd113.png',
        1003 : 'd116.png',
        1006 : 'd119.png',
        1009 : 'd122.png',
        1030 : 'd143.png',
        1063 : 'd176.png',
        1066 : 'd179.png',
        1069 : 'd182.png',
        1072 : 'd185.png',
        1087 : 'd200.png',
        1114 : 'd227.png',
        1117 : 'd230.png',
        1135 : 'd248.png',
        1147 : 'd260.png',
        1150 : 'd263.png',
        1153 : 'd266.png',
        1168 : 'd281.png',
        1171 : 'd284.png',
        1180 : 'd293.png',
        1183 : 'd296.png',
        1186 : 'd299.png',
        1189 : 'd302.png',
        1192 : 'd305.png',
        1195 : 'd308.png',
        1198 : 'd311.png',
        1201 : 'd314.png',
        1204 : 'd317.png',
        1207 : 'd320.png',
        1210 : 'd323.png',
        1213 : 'd326.png',
        1216 : 'd329.png',
        1219 : 'd332.png',
        1222 : 'd335.png',
        1225 : 'd338.png',
        1237 : 'd350.png',
        1240 : 'd353.png',
        1243 : 'd356.png',
        1246 : 'd359.png',
        1249 : 'd362.png',
        1252 : 'd365.png',
        1255 : 'd368.png',
        1258 : 'd371.png',
        1261 : 'd374.png',
        1264 : 'd377.png',
        1273 : 'd386.png',
        1276 : 'd389.png',
        1279 : 'd392.png',
        1282 : 'd395.png'
    }

    const nim = {
        1000 : 'n113.png',
        1003 : 'n116.png',
        1006 : 'n119.png',
        1009 : 'n122.png',
        1030 : 'n143.png',
        1063 : 'n176.png',
        1066 : 'n179.png',
        1069 : 'n182.png',
        1072 : 'n185.png',
        1087 : 'n200.png',
        1114 : 'n227.png',
        1117 : 'n230.png',
        1135 : 'n248.png',
        1147 : 'n260.png',
        1150 : 'n263.png',
        1153 : 'n266.png',
        1168 : 'n281.png',
        1171 : 'n284.png',
        1180 : 'n293.png',
        1183 : 'n296.png',
        1186 : 'n299.png',
        1189 : 'n302.png',
        1192 : 'n305.png',
        1195 : 'n308.png',
        1198 : 'n311.png',
        1201 : 'n314.png',
        1204 : 'n317.png',
        1207 : 'n320.png',
        1210 : 'n323.png',
        1213 : 'n326.png',
        1216 : 'n329.png',
        1219 : 'n332.png',
        1222 : 'n335.png',
        1225 : 'n338.png',
        1237 : 'n350.png',
        1240 : 'n353.png',
        1243 : 'n356.png',
        1246 : 'n359.png',
        1249 : 'n362.png',
        1252 : 'n365.png',
        1255 : 'n368.png',
        1258 : 'n371.png',
        1261 : 'n374.png',
        1264 : 'n377.png',
        1273 : 'n386.png',
        1276 : 'n389.png',
        1279 : 'n392.png',
        1282 : 'n395.png'
    }

    let clr = {
        'color' : 'black'
    }

    if(chck === 0)
    {
        clr = {
            'color' : 'white'
        }
    }

    let ico = "qm.png";

    if(props.val === 'a')
    {
        if(props.text === 'Good')
        {
            ico = "good.png"
        }
        else if(props.text === 'Moderate')
        {
            ico = "moderate.png"
        }
        else if(props.text === 'Bad')
        {
            ico = "ok.png"
        }
        else if(props.text === 'Unhealthy')
        {
            ico = "bad.png"
        }
        else if(props.text === 'Very Unhealthy')
        {
            ico = "mask.png"
        }
        else if(props.text === 'Hazardous')
        {
            ico = "danger.png"
        }
    }

    if(props.val === 'w')
    {
        if(chck === 1)
        {
            ico = dim[obj.current.condition.code];
        }

        else if(chck === 0)
        {
            ico = nim[obj.current.condition.code];
        }
    }


    return (
        <div className = "mainIconContainer">
            <img src = {ico} alt = "." className = "MLIcon"/>
            <span className = "MLText" style = {clr}>{props.text}</span>
        </div>
    );
}

MLIcon.defaultProps = {
    text : "-",
    pic : "qm.png"
}

export default MLIcon;