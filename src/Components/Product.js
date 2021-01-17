import React, { useState } from "react";
import "./Product.css";
import { SearchOutlined } from "@material-ui/icons";
import data from "../koinearth_products.json";
// import data from "../koinearth_products_large.json";
import FilterListIcon from "@material-ui/icons/FilterList";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Product = () => {
  const [search, setSearch] = useState("");

  // SEARCH ITEMS FUNCTIONALITY
  const searchItems = data.products
    .filter((data) => {
      if (search == null) return data;
      else if (data.product_name.toLowerCase().includes(search.toLowerCase()))
        return data;
    })
    .map(({ image_url, id, product_name, variants }) => {
      return (
        <div className="product">
          <div className="product__image">
            <img src={image_url} alt="img" />
          </div>
          <div className="product__details">
            <p className="product__detailsId">{id.toUpperCase()}</p>
            <h4 className="product__detailsName">{product_name}</h4>
            <p className="product__detailsVariants">
              {variants.length} Variants
            </p>
            <p className="product__detailsPrice">
              Rs{" "}
              {Math.min.apply(
                null,
                variants.map((item) => item.price)
              )}{" "}
              - Rs{" "}
              {Math.max.apply(
                null,
                variants.map((item) => item.price)
              )}
            </p>
          </div>
        </div>
      );
    });

  return (
    <div>
      {/* SEARCH BOX */}
      <div className="search">
        <div className="search__block">
          <div className="search__container">
            <SearchOutlined className="search__button" />
            <input
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
      </div>

      {/* PRODUCT LIST */}
      <div className="products">
        <div className="product__detailsTop">
          <div className="product__title">
            <p className="product__titleItems"> {data.products.length} items</p>
            <FilterListIcon />
          </div>
        </div>

        <div className="product__list">{searchItems}</div>
      </div>

      {/* ADD PRODUCT BUTTON */}
      <div className="addProduct">
        <div className="addProduct__button">
          <AddCircleOutlineIcon />
          <p>ADD NEW PRODUCTS</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
