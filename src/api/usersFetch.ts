import axios from "./config";
import {Users} from '../data/usersResponse';
import {Response} from '../data/baseResponse';

const path: string = "/users";

export const getUsers = async () => {
    await axios.get<Array<Users>>(path)
        .then((response: any) => {
            if (response.status === 200) {
                console.log(response);
                return {
                    data: response.data,
                    loading: false,
                    status: response.status,
                };
            } else {
                return {
                    loading: false,
                    data: null,
                    status: response.status,
                    message: response.statusText
                }
            }
        })
        .catch((err: Error) => {
            return {
                loading: false,
                data: null,
                status: 403,
                message: err.message
            }
        })
}