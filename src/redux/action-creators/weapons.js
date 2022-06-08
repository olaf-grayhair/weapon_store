import axios from "axios";
import { weaponsAction } from "../reducers/weaponsReducer";


export const fetchWeapons = (item) => {
    return async function (dispatch) {
        const { data } = await axios.get('https://62985283de3d7eea3c643d42.mockapi.io/weapons',{
            params: {
                filter: item,
            }
        })
        dispatch(weaponsAction(data))
    }
}