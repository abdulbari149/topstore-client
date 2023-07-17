import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../../services/product";
import { Product } from "../type";
import { ProductCard } from "./ProductCard";

interface Props {
  handleAddToCart: (id: string | number, name: string) => Promise<void>;
}

export const ProductList: React.FC<Props> = ({ handleAddToCart }) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const getProductsResponse = useGetProductsQuery({});

  useEffect(() => {
    if (getProductsResponse.isSuccess) {
      console.log(getProductsResponse.data);
      setProducts(getProductsResponse.data?.data ?? []);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProductsResponse.isSuccess]);

  useEffect(() => {
    if (getProductsResponse.isError) {
      console.log(getProductsResponse.error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProductsResponse.isError]);

  return (
    <div className="shop-category-area pt-100px pb-100px">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <div className="shop-top-bar d-flex">
              <p className="compare-product">
                <span>12</span> Product Found of <span>30</span>
              </p>
              <div className="select-shoing-wrap d-flex align-items-center">
                <div className="shot-product">
                  <p>Sort By:</p>
                </div>
                <div className="header-bottom-set dropdown">
                  <button
                    className="dropdown-toggle header-action-btn"
                    data-bs-toggle="dropdown"
                  >
                    Default <i className="fa fa-angle-down"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a className="dropdown-item" href="#">
                        Name, A to Z
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Name, Z to A
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Price, low to high
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Price, high to low
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sort By new
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sort By old
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="shop-bottom-area">
              <div className="row">
                <div className="col">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="shop-grid">
                      <div className="row mb-n-30px">
                        {products.map((p) => (
                          <div
                            key={p.id}
                            className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px"
                          >
                            <ProductCard
                              id={p.id}
                              name={p.name}
                              price={p.price}
                              handleAddToCart={handleAddToCart}
                              isOutOfStock={p.quantity === 0}
                              imageSrc={p.thumbnail}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
