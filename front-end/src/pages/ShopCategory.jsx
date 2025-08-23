import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/Frontend_Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      {console.log("all_products:", all_products)}
      <img src={props.banner} className="shopCategory-banner" alt="banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>showing 1-12 </span>
          out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="drop-down" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products && all_products?.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="shopCategory-loadmore">
        Explore More
      </div>
    </div>
  );
};
