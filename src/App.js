import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

export default class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://api.spoonacular.com/recipes/search?apiKey=0b0e407e74144cb086744547ae2c487f",
    search_url:
      "https://api.spoonacular.com/recipes/findByIngredients?apiKey=0b0e407e74144cb086744547ae2c487f",
    details_id: 0,
    pageIndex: 1,
    search: "",
    query: "&ingredients=",
    mode: 0,
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      const mode = this.state.mode;
      switch (mode) {
        default:
        case 0:
          this.setState(
            {
              recipes: jsonData.results,
            },
            () => {
              console.log(this.state.recipes);
            }
          );
          break;
        case 1:
          this.setState(
            {
              recipes: jsonData,
            },
            () => {
              console.log(this.state.recipes);
            }
          );
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            mode={this.state.mode}
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          ></RecipeList>
        );

      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          ></RecipeDetails>
        );
    }
  };

  handleIndex = (index) => {
    this.setState({
      pageIndex: index,
    });
  };
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id,
    });
  };

  handleChange = (e) => {
    this.setState(
      {
        search: e.target.value,
      },
      () => {}
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { search_url, search, query } = this.state;
    this.setState(
      () => {
        return { url: `${search_url}${query}${search}`, search: "", mode: 1 };
      },
      () => {
        // console.log(this.state.url);
        this.getRecipes();
      }
    );
  };

  render() {
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}
