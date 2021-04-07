
import {INC, ON_PRODUCTS_LOAD, DNC, ON_ITEM_IN_CARD, ON_CARD_VISIBILITY} from '../action-types'

const initialState = {
    count: 0,
    products: [],
    card: [],
    isCardOpen: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INC: {
            return{...state, count: state.count + 1}
        }

        case DNC: {
            return{...state, count: state.count - 1}
        }

        case ON_PRODUCTS_LOAD: {
            return{...state, products: action.payload }
        }

        case ON_CARD_VISIBILITY: {
            return{...state, isCardOpen: !state.isCardOpen }
        }

        case ON_ITEM_IN_CARD: {
            const updatedCard = state.card.filter(el => el.id !== action.payload.id);

            if (updatedCard.length === state.card.length) {
                updatedCard.push(action.payload);
            }

            return{...state, card: updatedCard }
        }


        default:
            return state;
    }
};
