import React from 'react';
import "./index.css";
import {onCardOpen} from '../../action';
import {useDispatch} from "react-redux";

export  const Card = (props) => {
    const card = props.card;
    const dispatch = useDispatch();

    return (
        <dic className="model" >

            <div className="model-body">
                <div className="flex-end"> <button className="x" onClick={() => dispatch(onCardOpen())}>Close</button>

                </div>

                {card.map(e => (<div className="card-item">
                    <p>{e.title}</p>
                    <img src={e.image} alt=""/>
                    <p>price: {e.price}</p>
                </div>))}
            </div>
        </dic>
    );
};
