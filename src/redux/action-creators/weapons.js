import axios from "axios";
import { curentPageAction, loadAction, weaponsAction } from "../reducers/weaponsReducer";


export const fetchWeapons = (category, searchItem, page, perPage) => {
    if(category === null) category = ''///ЗАМЕНИТЬ
    if(searchItem === undefined) searchItem = ''///ЗАМЕНИТЬ

    console.log(page, 'fetch');
    try{
        return async function (dispatch) {
            dispatch(loadAction(true))
            const {data} = await axios.get(`https://62985283de3d7eea3c643d42.mockapi.io/weapons?page=${page}&limit=${perPage}${category}${searchItem}`)
           
            dispatch(weaponsAction(data))
            dispatch(loadAction(false))
            
        }

    } catch (err) {
        console.log(err);
    }

}