import React, { Component } from 'react';
import Header from './components/layout/Header'
import Countries from './components/Counties';
import AddCountry from './components/AddCountry';
// import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';
// import AddCountry from './components/AddCountry';



class App extends Component {
  state = {
    countries: []
  }
    componentDidMount(){
      fetch('/all').then(res => res.json()).then(res => this.setState({countries:res.all}))
    }
      

  // Toggle completed
  markComplete = (slug) => {
    this.setState({countries:this.state.countries.map(country => {
      if(country.slug === slug){
        country.completed = !country.completed
      }
      return country;
    }) });
    }  

    //Delete Todo
  delTodo = (slug) => {
    fetch('/all').then(res => res.json()).then(res => this.setState({countries:res.all}))
    }

  //Add country
  addCountry = (CountryName) => {
    fetch('/searchCountry').then(res => res.json()).then(res => this.setState({countries:res.all}))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddCountry addCountry={this.addCountry}/>
                <Countries countries={this.state.countries} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
