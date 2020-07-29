import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    const { mode, handleDetails } = this.props;

    let sourceUrl, image, imgUrl;
    const { id, title } = this.props.info;
    switch (mode) {
      case 0:
        sourceUrl = this.props.info.sourceUrl;
        image = this.props.info.image;
        imgUrl = "https://spoonacular.com/recipeImages/" + image;
        break;
      case 1:
        imgUrl = this.props.info.image;
        break;
    }

    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={imgUrl}
              alt=""
              className="img-card-top"
              style={{ height: "14rem" }}
            />
            <div
              className="card-body text-capitalize"
              style={{ minHeight: "85px" }}
            >
              <h6>{title}</h6>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-primary text-capitalize"
                onClick={() => handleDetails(0, id)}
              >
                Details
              </button>
              {mode === 0 ? (
                <a
                  href={sourceUrl}
                  className="btn btn-success mx-2 text-capitalize"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  recipe url
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
