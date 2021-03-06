import React from "react";


import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);


/**
 * Without styled components:
 * 
 * import "./cart-item.styles.scss"

const CartItem = ({item: { imageUrl, price, name, quantity }}) => (
   <div className="cart-item">
     <img src={imageUrl} alt="item" />
     <div className="item-details">
         <span className="name">{name}</span>
         <span className="price">{quantity} x ${price}</span>
     </div>
   </div>
);
 */



export default CartItem;