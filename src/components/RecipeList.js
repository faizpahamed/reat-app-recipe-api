import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
export default class RecipeList extends Component {
  render() {
    const {
      mode,
      recipes,
      handleDetails,
      value,
      handleChange,
      handleSubmit,
    } = this.props;

    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        ></RecipeSearch>
        <div className="container my-5">
          {/* title*/}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">RECIPE LIST</h1>
            </div>
          </div>
          {/* title*/}
          <div className="row">
            {recipes.map((recipe) => {
              return (
                <Recipe
                  key={recipe.id}
                  info={recipe}
                  mode={mode}
                  handleDetails={handleDetails}
                >
                  {" "}
                </Recipe>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
