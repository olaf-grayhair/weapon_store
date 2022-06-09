import axios from "axios";
import { curentPageAction, loadAction, weaponsAction } from "../reducers/weaponsReducer";


export const fetchWeapons = (item, searchItem, page) => {
    if(item === 'Все') item = ''
    return async function (dispatch) {
        dispatch(loadAction(true))
        const {data} = await axios.get('https://62985283de3d7eea3c643d42.mockapi.io/weapons',{
            params: {
                filter: item,
                search: searchItem,
                // sortBy: 'createdAt',
                // order: 'desc',
            }
        })
        console.log(page)
        dispatch(weaponsAction(data))
        dispatch(loadAction(false))
        // dispatch(curentPageAction(page))
    }
}