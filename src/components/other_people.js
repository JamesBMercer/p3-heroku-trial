import React from "react";
import "./mini_person_detail.js";
import MiniPersonDetail from "./mini_person_detail.js";

const OtherPeople = ({peopleArr, onClick}) => {
    
    if(peopleArr.length == 0)
        return null;
    return peopleArr.map((person, i) => {
        if(i==0)
            return (<h1></h1>)
        return (
            <div>
                <MiniPersonDetail person={person} onClick={onClick}/>
            </div>
        )
    })

};

export default OtherPeople;