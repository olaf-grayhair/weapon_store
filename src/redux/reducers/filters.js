
const SORT_BY_PRICE = 'SORT_BY_PRICE'
const SET_CATEGORY = 'SET_CATEGORY'

const defaultState = {
    category: null,
    sortByPrice: null,
}

export const filtersReducer = (state = defaultState ,action) => {
    switch(action.type) {
        case SORT_BY_PRICE:
            return {...state, sortByPrice: action.payload} 

        case SET_CATEGORY:
            return {...state, category: action.payload} 

        default:
            return state
    }
}

export const sortAction = payload => ({type: SORT_BY_PRICE, payload})
export const setAction = payload => ({type: SET_CATEGORY, payload})