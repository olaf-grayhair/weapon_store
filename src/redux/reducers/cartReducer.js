const ADD_TO_CART = 'ADD_TO_CART'

const defaultState = {
    // items: [{
    //     img: null,
    //     name: null,
    //     available: null,
    //     price: null,
    // }],
    items: [],
    priceCount: null,
    itemsCount: null

}

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(state, 'reducer!!!');
            return {
                ...state,
                items: [...state.items, 
                    state.items.length > 0 
                    ? state.items.map(el => {
                        return el.id === action.payload.id ? el.name = 'GOOD' : el.name = 'BAD' 
                        // if(el.id === action.payload.id) {
                        //     el.count += 1
                        // } else {
                        //     state.items.concat(action.payload) 
                        // }
                    })
                    : action.payload],
                    // items: [...state.items, action.payload],
                    priceCount: state.priceCount + action.payload.price,
                    itemsCount: state.itemsCount + 1
            }

            default:
                return state
    }
}

export const cartAction = payload => ({
    type: ADD_TO_CART,
    payload
})