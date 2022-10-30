
const FETCH_ONE_PAGE = 'FETCH_ONE_PAGE'
const LOAD_PAGE = 'LOAD_PAGE'
const DECREASE_ONE_AVAILABLE = 'DECREASE_ONE_AVAILABLE'

const defaultState = {
    items: null,
    loading: false,
    totalPrice: null,
    isLoading: false,
}

export const onePageReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_ONE_PAGE:
            return {...state, 
                items: action.payload, 
                loading: true,
                totalPrice: action.payload.totalPrice,
            }
        
        case LOAD_PAGE:
            return {...state, isLoading: action.payload}

        case DECREASE_ONE_AVAILABLE:
            return {...state, 
                items: {...state.items, available: state.items.available - action.payload}//изменить одно знаечение!
            }

            default:
                return state
    }
}

export const onePageAction = payload => ({type: FETCH_ONE_PAGE, payload})
export const isPageLoadingAction = payload => ({type: LOAD_PAGE, payload})
export const decreaseOneAction = payload => ({type: DECREASE_ONE_AVAILABLE, payload})