import axios from 'axios';
import {PATH_USERS} from '../constanta_url';
import { apiResponse } from '../config/apiResponses';

export type Users = {
    name: String,
    gender: String,
    status: String
}


export const getUsers = async () => {
    try{
        const response = await axios.get(PATH_USERS);
        console.log(response);
        return apiResponse(response.data)
    } catch (err) {
        throw err;
    }
}