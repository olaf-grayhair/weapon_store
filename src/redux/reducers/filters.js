
const SORT_BY_PRICE = 'SORT_BY_PRICE'
const SET_CATEGORY = 'SET_CATEGORY'
const SEARCH_ITEMS = 'SEARCH_ITEMS'
const AVAILABLE_ITEMS = 'AVAILABLE_ITEMS'

const defaultState = {
    category: null,
    sortByPrice: null,
    search: null,
    available: null,
}

export const filtersReducer = (state = defaultState ,action) => {
    switch(action.type) {
        case SORT_BY_PRICE:
            return {...state, sortByPrice: action.payload} 

        case SET_CATEGORY:
            return {...state, category: action.payload} 

        case SEARCH_ITEMS:
            return {...state, search: action.payload} 

        case AVAILABLE_ITEMS:
            return {...state, available: action.payload} 

        default:
            return state
    }
}

export const sortAction = payload => ({type: SORT_BY_PRICE, payload})
export const setAction = payload => ({type: SET_CATEGORY, payload})
export const searchAction = payload => ({type: SEARCH_ITEMS, payload})
export const availableAction = payload => ({type: AVAILABLE_ITEMS, payload})