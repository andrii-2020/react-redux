import React, {useEffect} from 'react';
import "./index.css";
import {useDispatch} from "react-redux";
import {onItemCart} from "../../action";


export  const ProductItem = ({productData, isAdedToCard}) => {
    const {id, title, price, description, image} = productData;
    const dispatch = useDispatch();

    const onAddCard = () => {
        dispatch(onItemCart(productData));
    };

    return (
        <div className="card">
           <ul>
               <li>{id}</li>
               <li>title: {title}</li>
               <li>description: {description}</li>

               <br/>
               <img src={image}    alt='sdsd'/>
               <li>price: {price}</li>
           </ul>
            <button onClick={onAddCard}>{isAdedToCard ? 'remove CARRD' :  'add CARD'}</button>
        </div>
    );
};
