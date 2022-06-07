import axios from "axios";
import { weaponsAction } from "../reducers/weaponsReducer";


export const fetchWeapons = () => {
    return async function (dispatch) {
        const { data } = await axios.get('https://62985283de3d7eea3c643d42.mockapi.io/weapons')
        dispatch(weaponsAction(data))
    }
}