import React from 'react';
import Character from './Character'

export default class Filter extends React.Component {
  constructor(){
    super();

    this.state = {
      option: 'All',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    debugger
    let option = event.target.value
    this.setState({ option })
  }

  handleSelect = (e) => this.props.handleFilter(e.target.value)


  render(){
    return(
      <div>
      <select className="ui dropdown" onChange={this.handleSelect}>
        <option value="">Filter</option>
        <option value="All">All</option>
        <option value="Alive">Alive</option>
      </select>
    </div>
    )
  }
}
