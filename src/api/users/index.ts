import axios from 'axios';
import {PATH_USERS} from '../constanta_url';

export const getUsers = async () => {
    try{
        const response = await axios.get(PATH_USERS);
        console.log(response);
    } catch (err) {
        throw err;
    }
}