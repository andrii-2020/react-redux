import React, {useEffect} from 'react';
import {onProductLoaded} from '../../action'
import {useDispatch, useSelector} from "react-redux";
import {ProductItem} from "../product-item";
import './index.css'

export  const ProductList = () => {
        const dispatch = useDispatch();
        const products = useSelector(({products}) => products)
        const card = useSelector(({card}) => card)

    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        dispatch(onProductLoaded(data));
    }

    useEffect(() => {
       fetchProducts();
    }, []);

    return (
       <div className="list">
           {products.map((product) => <ProductItem
               key={product.id}
               isAdedToCard={!!card.find(el => el.id === product.id)}
               productData={product}/>)}
       </div>
    );
};
