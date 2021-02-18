import ReactDOM from "react-dom";
import React, { Component } from "react";
import { default as Select } from "react-select";
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS library
import "./index.css"; // in addition, import our own CSS specs
import _ from 'lodash';
import GenderBar from "./components/gender_bar";
import CountryBar from "./components/country_bar";
import PersonDetail from "./components/person_detail";
import OtherPeople from "./components/other_people";

    class App extends Component {
      constructor(props) {
      super(props);
      this.state={
        peopleArr : [],
        gender : null,
        nationality : null,
        focusedPerson : null
      }
    }

    getPeople(gender, nationality) {
      fetch(`https://randomuser.me/api/?results=10&gender=${gender}&nat=${nationality}`)
      .then(response => response.json())
      .then(
          (result) => {
              console.log(result)
              this.setState({
                  peopleArr : result.results,
                  gender : gender,
                  nationality : nationality,
                  focusedPerson : result.results[0]
              });
          },
          (error) => {
            
          }
      )
    }

    render() {
      return (
          <div className="app">
            <div className="left">
                <OtherPeople peopleArr={this.state.peopleArr} onClick={person => this.setState({focusedPerson : person})}/>
              </div>  
            <div className="right">
              <div className="header">
                <div className="toprow">
                  <h1>Gender: </h1>  
                  <GenderBar onChange={g => this.getPeople(g.value, this.state.nationality)}/>
                </div>
                <div className="toprow">
                  <h1>Nationality: </h1>
                  <CountryBar onChange={c => this.getPeople(this.state.gender, c.value)}/>
                </div>
                <hr className="divider"></hr>
              </div>
              <div className="body">
                <PersonDetail person={this.state.focusedPerson}/>
              </div>
            </div>
            
          </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
