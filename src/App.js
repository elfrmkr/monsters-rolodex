import React, {Component} from 'react';
import "./App.css";
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './components/search-box/search-box.style.css';


class App extends Component {

  constructor(){
      super();
      this.state = {
        
          monsters: [],
          searchField: ''
      };
      // this keyword defined in constructor, it needs to be done for every func. normally but we don't want it (this.handleChange = this.handleChange.bind(this);)
  } 

  /*Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount())
   life cycle method*/
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users=> this.setState({monsters:users}))
  }
// arrow function is defined, no need for binding in the constructor 
  handleChange = (e)=> {
    this.setState({searchField: e.target.value})
  }
  // life cycle method
 render()
{
  const {monsters, searchField } = this.state;
  /* arama yaparken harf durumu sıkıntı çıkarmamalı
  => represents function*/
  const filteredMonsters = monsters.filter( monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));
   
  return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox 
          placeholder ='search monsters' //gives the name of search bar
          handleChange = {this.handleChange}// callback to function with e signature 
          />
          <CardList monsters = {filteredMonsters}> 
          
          </CardList>
          
        </div>
      );
} 
}

export default App;
