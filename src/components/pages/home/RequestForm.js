import React from "react";

export default function RequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="section-requestForm row">
        <hr className="hor-line-small" />
        <br />
        <div className="request">
          <div className="request-form">
            <form action="" className="form" onSubmit={handleSubmit}>
              <h1 className="heading-primary">Request a Product</h1>
              <div className="form-group">
                <label htmlFor="product-title" className="label-input">
                  Product Title
                </label>
                <br />
                <input
                  type="text"
                  id="product-title"
                  placeholder="Enter Product Title"
                  className="textbox form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="product-description" className="label-input">
                  Product Description
                </label>
                <br />
                <textarea
                  name="textarea-description"
                  id="product-description"
                  rows="3"
                  placeholder="Describe the product"
                  className="textarea-description form-input"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="product-picture" className="label-input">
                  Product Demo Picture
                </label>
                <br />
                <input
                  type="file"
                  name="product-picture"
                  id="product-picture"
                  className="product-picture form-input"
                />
              </div>
              <button type="submit" className="btn-primary btn-request">
                Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
