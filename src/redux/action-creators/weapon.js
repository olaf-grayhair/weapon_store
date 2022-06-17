import { isPageLoadingAction, onePageAction } from "../reducers/onePageReducer";
import axios from "axios";

export const fetchOnePage = (id) => {
    return async function (dispatch) {
        dispatch(isPageLoadingAction(true))
        const { data } = await axios.get(`https://62985283de3d7eea3c643d42.mockapi.io/weapons/${id}`)
        dispatch(onePageAction(data))
        dispatch(isPageLoadingAction(false))
    }
}