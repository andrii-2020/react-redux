
import {INC, ON_PRODUCTS_LOAD, DNC, ON_ITEM_IN_CARD, ON_CARD_VISIBILITY} from '../action-types';

export const incCounter = () => ({type: INC});
export const decCounter = () => ({type: DNC});
export const onProductLoaded = (payload) => ({type: ON_PRODUCTS_LOAD, payload});
export const onItemCart = (payload) => ({type: ON_ITEM_IN_CARD, payload});
export const onCardOpen = () => ({type: ON_CARD_VISIBILITY});
