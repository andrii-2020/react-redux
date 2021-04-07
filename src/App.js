import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';

import {incCounter, decCounter} from './action'
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {Card} from "./components/card";

function App() {
    const count = useSelector(({count}) => count);
    const isCardOpen = useSelector(({isCardOpen}) => isCardOpen);
    // const multSelector = useSelector(({card }) => ({card}))
    const card = useSelector(({card}) => card);
    const dispatch = useDispatch(incCounter(), decCounter());


    return <div className='App' >
        <div> Lorem ipsum dolor sit amet. {count} <br/>
        <button onClick={() => dispatch(incCounter())}>+ </button>
        <button onClick={() => dispatch(decCounter())}>- </button></div>
     <Header/>
     <ProductList/>
        {isCardOpen && <Card  card={card}/>}
    </div>
}


export default App;



// class App extends React.Component {
//   render() {
//       console.log(this.props)
//       return <div className='App'> Lorem ipsum dolor sit amet.</div>
//   }
// }
//
// export default connect((state) => {
//     return {products: state.products, cards: state.cards}
// }) (App);
