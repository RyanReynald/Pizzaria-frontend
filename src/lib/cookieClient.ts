import { getCookie } from "cookies-next";

export function getcookieClient(){
    const token = getCookie("session")
    return token;
}