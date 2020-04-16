import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Countries extends Component {


  render() {
    return this.props.countries.map((country) => (
        <TodoItem key={country.slug} country={country} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

// PropTypes
Countries.propTypes = {
    countries: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}
export default Countries;
