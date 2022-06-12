
const FETCH_ITEMS = 'FETCH_ITEMS'
const LOAD_ITEMS = 'LOAD_ITEMS'
const CURRENT_PAGE = 'CURRENT_PAGE'

const defaultState = {
    items: [],
    loading: false,
    currentPage: 1,
    perPage: 8,
    totalCount: 0
}

export const weaponsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_ITEMS:
            return {...state, items: action.payload, totalCount: 100}

        case LOAD_ITEMS:
            return {...state, loading: action.payload}

        case CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        
            default:
                return state
    }
}

export const weaponsAction = payload => ({type: FETCH_ITEMS, payload})
export const loadAction = payload => ({type: LOAD_ITEMS, payload})
export const curentPageAction = payload => ({type: CURRENT_PAGE, payload})
