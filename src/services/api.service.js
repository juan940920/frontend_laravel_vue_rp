import axios from "axios";

const url_base = "http://127.0.0.1:8000/api";

export function Api(){

    const token = localStorage.getItem("access_token");

    const api = axios.create({
        baseURL: url_base,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'beader'+ token,
        }
    })

    return api
}