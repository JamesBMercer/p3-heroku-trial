import React from "react";

const MiniPersonDetail = ({person, onClick}) => {
    
    if(!person)
        return (
            <div></div>
        )
    return (
        <div className="miniperson" onClick={() => onClick(person)}>
            <img src={person.picture.large} width="125"></img>
            <h1></h1>
        </div>
    );

};

export default MiniPersonDetail