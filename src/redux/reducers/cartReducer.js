const ADD_TO_CART = 'ADD_TO_CART'
const INCREASE_COUNT = 'INCREASE_COUNT'
const DECREASE_COUNT = 'DECREASE_COUNT'
const DELETE_ITEM = 'DELETE_ITEM'
const CLEAR_CART = 'CLEAR_CART'

const defaultState = {
    items: [],
    priceCount: null,
    itemsCount: null

}

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const inCart = state.items.find(el => 
                el.id === action.payload.id ? true : false)///РАЗБЕРИСЬ?

            console.log(inCart, 'reducer!!!');

            return {
                ...state,
                items: inCart 
                ?  state.items.map(el => 
                    el.id === action.payload.id 
                    ? {...el, count: el.count +1} : el)
                : [...state.items, action.payload],///РАЗБЕРИСЬ?

                    priceCount: state.priceCount + action.payload.price,
                    itemsCount: state.itemsCount + 1
            }

        case INCREASE_COUNT:
            ///УБРАТЬ КОСТЫЛИ
            const w = []
            const addPrice = state.items.find(el => 
                el.id === action.payload
                ? w.push(el.price)
                // ? console.log(el.id, action.payload, '2w')
                : console.log(el.id, action.payload, '2w')
                )
                w.join('')
                console.log(w);
                ///УБРАТЬ КОСТЫЛИ
            return {...state, 
                items: state.items.map(el => 
                    el.id === action.payload
                    ? {...el, count: el.count +1}
                    : el
                    ),
                    itemsCount: state.itemsCount + 1,
                    priceCount: state.priceCount + +w,///УБРАТЬ КОСТЫЛИ
                }

        case DECREASE_COUNT:
            return {...state, 
                items: state.items.map(el => 
                    el.id === action.payload
                    ? {...el, count: el.count > 0 ? el.count -1 : el.count}
                    : el
                    ),
                    itemsCount: state.itemsCount - 1
                }

        case CLEAR_CART:
            return {...state, 
                items: state.items.filter(el => el.id === action.payload)}

        case DELETE_ITEM:
            return {...state, 
                items: state.items.filter(el => el.id !== action.payload)}

            default:
                return state
    }
}

export const cartAction = payload => ({
    type: ADD_TO_CART,
    payload
})
export const increaseAction = payload => ({
    type: INCREASE_COUNT,
    payload
})
export const decreaseAction = payload => ({
    type: DECREASE_COUNT,
    payload
})
export const clearCartAction = payload => ({
    type: CLEAR_CART,
    payload
})
export const deletetAction = payload => ({
    type: DELETE_ITEM,
    payload
})