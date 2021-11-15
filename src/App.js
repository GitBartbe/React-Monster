import React, { Component } from "react";
import CardList from "./components/card-list-component.jsx";
import SearchBox from "./components/search-box.jsx";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFild: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchFild: e.target.value });
  };

  render() {
    const { monsters, searchFild } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFild.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
