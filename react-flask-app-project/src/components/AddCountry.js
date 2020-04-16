import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class AddCountry extends Component {
    state = {
        CountryName: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddCountry(this.state.CountryName);
        this.setState({CountryName:""});
    }
    
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: "flex"}}>
          <input 
            type="text" 
            name="CountryName"
            style={{flex: "10", padding:'5px'}} 
            placeholder="Search Country Name .." 
            value={this.state.CountryName}
            onChange={this.onChange}
          />
          <input 
            type="submit"
            value="Submit"
            className="btn"
            style={{flex: "1"}}
          />
      </form>
    )
  }
}


// PropTypes
AddCountry.propType = {
  AddCountry: PropTypes.func.isRequired
}

export default AddCountry
