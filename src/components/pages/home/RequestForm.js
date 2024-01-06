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
                className="textbox"
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
                cols="50"
                rows="3"
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
                placeholder="Please Provide Demo"
              />
            </div>
            <button type="submit">Request</button>
          </form>
        </div>
      </div>
    </>
  );
}
