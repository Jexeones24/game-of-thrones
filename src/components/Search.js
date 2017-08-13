import React, {Component} from 'react'


export default class Search extends Component {
  constructor(){
    super();

    this.state = {
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    console.log(e.target.value)
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]:value
    })
  }

  handleSubmit = (event) => {
    debugger
    event.preventDefault()
    const charParams = this.state
    return this.props.getChar(charParams)
    // some function from parent to fetch by whatever
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <div className="ui form">
        <div className="inline field" >
          <label>Search By</label>
          <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
          <input type="submit" />
        </div>
      </div>
    </form>
    )
  }
}
