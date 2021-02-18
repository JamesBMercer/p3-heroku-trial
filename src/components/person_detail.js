import React from "react";

const PersonDetail = ({person}) => {
    
    if(!person)
        return (
            <div className="focusperson">
                <h3>No Gender or Nationality Selected!</h3>
            </div>
        )
    return (
        <div className="focusperson">
            <img src={person.picture.large} width="270"></img>
            <div className="information">
                <h1><b>{person.name.first} {person.name.last}</b> </h1>
                <h3>{person.email}</h3>
                <h3>{person.gender}</h3>
                <h3>{person.cell}</h3>
                <h3>{person.nat}</h3>
            </div> 
        </div>
    );

};

export default PersonDetail