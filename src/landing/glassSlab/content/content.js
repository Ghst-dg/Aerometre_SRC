import React from "react";
import Clipart from "./clipart/clipart";
import './content.css';
import Quotes from "./quotes/quotesContainer";
import LCSearchBox from "./search/searchContainer";

const LContent = () =>{
    return(
        <div className = "lContent">
        <LCSearchBox/>
        <Quotes/>
        <Clipart/>
        </div>
    );
}

export default LContent;