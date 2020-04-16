import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
        }
    }

  render() { 
      const{slug, Country } = this.props.country;
      console.log(this.props.country)   
    return (
      <div style={this.getStyle()}>
          <p>
          <input type="checkbox"  /> {' '}
          {Country}
          <button onClick={this.props.delTodo.bind(this, slug)} style={btnStyle}>X</button>
          </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propType = {
    country: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
