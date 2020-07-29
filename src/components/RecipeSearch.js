import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h2 className="text-slanted text-capitalize">
                Search for recipe <br></br>with&nbsp;
                <strong className="text-success">
                  <h1 className="d-inline">Spoonacular</h1>
                </strong>
              </h2>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                  type recipes separated by commas
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="chicken,onions and carrots.."
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className=" btn btn-primary text-white"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
