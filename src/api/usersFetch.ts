import axios from "./config";
import {Users} from '../data/usersResponse';
import {Response} from '../data/baseResponse';

const path: string = "/users";

export const getUsers = async () => {
    axios.get<Array<Users>>(path)
        .then((response: any) => {
            console.log(response);
        })
        .catch((err: Error) => {
            console.log(err);
        })
}