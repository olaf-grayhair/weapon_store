
const FETCH_ITEMS = 'FETCH_ITEMS'

const defaultState = {
    items: [],
    loading: false,
}

export const weaponsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_ITEMS:
            return {...state, items: action.payload, loading: true}
        
            default:
                return state
    }
}

export const weaponsAction = payload => ({type: FETCH_ITEMS, payload})