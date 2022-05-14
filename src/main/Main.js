import React, {useContext} from 'react';
import './Main.css';
import MHeader from './header/header';
import MContent from './content/MContent';
import MGlass from './glass/mGlass';
import { MainDataContext } from '../context/MainDataContext';

const Main = () => {
    const {obj} = useContext(MainDataContext);
    const aq = Math.round(obj.current.air_quality.pm2_5);
    const dn = obj.current.is_day;

    let bag = {
        'backgroundColor' : '#d9d9d9',
        'backgroundImage' : 'linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%)'
    }

    if(aq <= 50 && dn === 0)
    {
        bag = {
        'backgroundColor' : '#9EFB1A',
        'backgroundImage' : 'linear-gradient(120deg, #9EFB1A 0%, #233329 100%)'
        }
    }
    else if(aq <= 50 && dn === 1)
    {
        bag = {
        'backgroundColor' : '#80FF72',
        'backgroundImage' : 'linear-gradient(120deg, #80FF72 0%, #7ee8fa 100%)'
        }
    }
    else if(aq <= 100 && dn === 0)
    {
        bag = {
        'backgroundColor' : '#C8AB37',
        'backgroundImage' : 'linear-gradient(120deg, #C8AB37 0%, #2E2207 100%)'
        }
    }
    else if(aq <= 100 && dn === 1)
    {
        bag = {
        'backgroundColor' : '#FEC84E',
        'backgroundImage' : 'linear-gradient(120deg, #FEC84E 0%, #DECD87 100%)'
        }
    }
    else if(aq <= 150 && dn === 0)
    {
        bag = {
        'backgroundColor' : '#F56545',
        'backgroundImage' : 'linear-gradient(120deg, #F56545 0%, #99201C 100%)'
        }
    }
    else if(aq <= 150 && dn === 1)
    {
        bag = {
        'backgroundColor' : '#FFB380',
        'backgroundImage' : 'linear-gradient(120deg, #FFB380 0%, #F39F86 100%)'
        }
    }
    else if(aq <= 200 && dn === 0)
    {
        bag = {
        'backgroundColor' : '#F53844',
        'backgroundImage' : 'linear-gradient(120deg, #F53844 0%, #42378F 100%)'
        }
    }
    else if(aq <= 200 && dn === 1)
    {
        bag = {
        'backgroundColor' : '#FF8080',
        'backgroundImage' : 'linear-gradient(120deg, #FF8080 0%, #FF5555 100%)'
        }
    }
    else if(aq <= 300 && dn === 0)
    {
        bag = {
        'backgroundColor' : '#7F5A83',
        'backgroundImage' : 'linear-gradient(120deg, #7F5A83 0%, #0D324D 100%)'
        }
    }
    else if(aq <= 300 && dn === 1)
    {
        bag = {
        'backgroundColor' : '#9FA4C4',
        'backgroundImage' : 'linear-gradient(120deg, #9FA4C4 0%, #B3CDD1 100%)'
        }
    }
    else if(301 <= aq && dn === 0)
    {
        bag = {
        'backgroundColor' : '#A71D31',
        'backgroundImage' : 'linear-gradient(120deg, #A71D31 0%, #3F0D12 100%)'
        }
    }
    else if(301 <= aq && dn === 1)
    {
        bag = {
        'backgroundColor' : '#DB7F8E',
        'backgroundImage' : 'linear-gradient(120deg, #DB7F8E 0%, #9FA4C4 100%)'
        }
    }

    return (
        <div className = "main" style={bag}>
            <MHeader/>
            <MContent/>
            <MGlass/>
        </div>
    );
}

export default Main;