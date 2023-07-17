import React from "react";
import _ from "lodash";
interface Props {
  name: string;
	id: number;
  price: number;
  imageSrc: string;
	handleAddToCart: (id: number | string, name: string) => Promise<void>
  isOutOfStock?: boolean
}

export const ProductCard: React.FC<Props> = ({ id, name, price, isOutOfStock, handleAddToCart, imageSrc }) => {
	return (
    <React.Fragment>
      <div className="product">
        <span className="badges">
          {isOutOfStock && <span className="new">Out Of Stock</span> }
        </span>
        <div className="thumb">
          <a href="single-product.html" className="image">
            <img src={imageSrc} alt={`${name}`} width={250} height={300}/>
            <img
              className="hover-image"
              src={imageSrc}
              alt={`${name}`}
            />
          </a>
        </div>
        <div className="content">
          <h5 className="title">
            <a href="single-product.html">{_.capitalize(name)}</a>
          </h5>
          <span className="price">
            <span className="new">${price}</span>
          </span>
        </div>
        <div className="actions">
          <button
            title="Add To Cart"
            className="action add-to-cart"
            data-bs-toggle="modal"
            data-bs-target="#add-to-cart"
            disabled={isOutOfStock}
						onClick={() => handleAddToCart(id, name)}
          >
            <i className="pe-7s-shopbag"></i>
          </button>
          <button
            className="action quickview"
            data-link-action="quickview"
            title="Quick view"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="pe-7s-look"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
