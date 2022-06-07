
const FETCH_ONE_PAGE = 'FETCH_ONE_PAGE'

const defaultState = {
    items: null,
    loading: false,
}

export const onePageReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_ONE_PAGE:
            return {...state, items: action.payload, loading: true}
        
            default:
                return state
    }
}

export const onePageAction = payload => ({type: FETCH_ONE_PAGE, payload})