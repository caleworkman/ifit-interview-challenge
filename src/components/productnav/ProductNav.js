import React, { PureComponent } from "react";
import "./ProductNav.css";

class ProductNav extends PureComponent {
  render() {
    return (
      <div className="product-nav">
        <div className="product-nav__nav">BLOG</div>
        <div className="product-nav__nav">NOURISH</div>
        <div className="product-nav__nav">SHOP</div>
      </div>
    );
  }
}

export default ProductNav;
