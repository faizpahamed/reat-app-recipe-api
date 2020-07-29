import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: recipe,
      url: `https://api.spoonacular.com/recipes/${this.props.id}/information?apiKey=0b0e407e74144cb086744547ae2c487f&includeNutrition=false`,
    };
  }
  async getRecipe() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipe: jsonData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipe();
  }

  render() {
    const { handleIndex } = this.props;

    const {
      image,
      extendedIngredients,
      sourceName,
      sourceUrl,
      title,
    } = this.state.recipe;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize"
                onClick={() => handleIndex(1)}
              >
                back to recipe
              </button>
              <img src={image} alt="" className="d-block w-100" />
            </div>

            {/* details */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-danger text-capitalize text-slanted">
                provided by :{sourceName}
              </h6>
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2 text-capitalize"
              >
                Recipe url
              </a>

              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {extendedIngredients.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item text-slanted">
                      {item.originalString}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
