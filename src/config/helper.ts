import { jwtDecode } from "jwt-decode";

export function getDecodeAccessToken() {
    const token = localStorage.getItem('token');
    // console.log("tokentoken ::>>", token);
    try {
        return token ? jwtDecode(token) : null;
    } catch (Error) {
        return null;
    }
}   