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
            const countItems = state.items.map(el => el.price * el.count)
            const res = countItems.length > 0 ? countItems.reduce((a, b) => a + b) : []

            const inCart = state.items.find(el => 
                el.id === action.payload.id ? true : false)///РАЗБЕРИСЬ?
            return {
                ...state,
                items: inCart 
                ?  state.items.map(el => 
                    el.id === action.payload.id 
                    ? {...el, 
                        count: el.count +1,
                        
                        // available: el.available - 1
                    } 
                    : el)
                : [...state.items, action.payload],///РАЗБЕРИСЬ?

                    // priceCount: state.items > 0 
                    // ? state.items.map(el => el.price * el.count).reduce((a, b) => a + b)
                    // : 0
                    // ,
                    priceCount: state.priceCount + action.payload.price,
                    itemsCount: state.itemsCount + 1
            }

        case INCREASE_COUNT:
            ///УБРАТЬ КОСТЫЛИ
            let num = 0
            state.items.find(el => 
                el.id === action.payload
                ? num = el.price
                : null
                )
                ///УБРАТЬ КОСТЫЛИ
            return {...state, 
                items: state.items.map(el => 
                    el.id === action.payload
                    ? {...el, count: el.count +1}
                    : el
                    ),
                    itemsCount: state.itemsCount + 1,
                    priceCount: state.priceCount + num,///УБРАТЬ КОСТЫЛИ
                }

        case DECREASE_COUNT:
            ///УБРАТЬ КОСТЫЛИ
            let deg = 0
            state.items.find(el => 
                el.id === action.payload
                ? deg = el.price
                : null
                )
            ///УБРАТЬ КОСТЫЛИ
            return {...state, 
                items: state.items.map(el => 
                    el.id === action.payload
                    ? {...el, count: el.count > 1 ? el.count -1 : el.count}
                    : el
                    ),
                    itemsCount: state.itemsCount > state.items.length//нужун фикс !!!
                    ? state.itemsCount - 1
                    : state.itemsCount,
                    priceCount: state.itemsCount > state.items.length//нужун фикс !!! 
                    ? state.priceCount - deg 
                    : state.priceCount,
                    ///ПОФИКСИЛ
                }

        case CLEAR_CART:
            return {...state, 
                items: state.items.filter(el => el.id === action.payload),
                itemsCount: state.itemsCount = null,
                priceCount: state.priceCount = null,
            }

        case DELETE_ITEM:
            ///УБРАТЬ КОСТЫЛИ
            let inc = 0
            state.items.find(el => 
                el.id === action.payload
                ? inc = el.price
                : null
                )
            ///УБРАТЬ КОСТЫЛИ
            return {...state, 
                items: state.items.filter(el => el.id !== action.payload.id),
                itemsCount: state.itemsCount - action.payload.count,
                priceCount: state.priceCount - action.payload.totalPrice,
            }

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
export const deletetAction = (id, count, totalPrice) => ({
    type: DELETE_ITEM,
    payload: {
        id,
        count,
        totalPrice,
    },
})