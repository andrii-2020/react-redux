import React from 'react';
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {onCardOpen} from '../../action';

export  const Header = () => {
    const card = useSelector(({card}) => card);
    const dispatch = useDispatch();
    return (
        <header>
            <button onClick={() => dispatch(onCardOpen())}>Card : {card.length}</button>
        </header>
    );
};
