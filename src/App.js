import React, { Component } from 'react';
import './App.css';
import Character from './components/Character'
import Filter from './components/Filter'
import Search from './components/Search'

class App extends Component {
  constructor(){
    super();

    this.state = {
      characters: []
      }
    }

    componentWillMount(){
      fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50")
      .then( resp => resp.json() )
      .then( json => {
        this.setState({ characters: json })
      })
    }

    getChar = (charParams) => {
      this.setState( preState => {
        const newState = {
          characters: [...preState.characters, newState]
        }
        return newState
      })
    }

    handleFilter = (arg) => {
      this.setState({
        characters: arg
      })
    }

  render() {
    console.log(this.state.characters)
    return (
      <div className="App">
        <Search getChar={this.getChar}/>
        <Filter handleFilter={this.handleFilter}/>

        {this.state.characters.map((character, index) => <Character key={index} character={character}/>)}
      </div>
    );
  }
}

export default App;
