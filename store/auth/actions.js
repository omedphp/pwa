import * as auth from "./types";
import api from "../../utils/api";
import Token from "../../utils/token";

export const login = ({commit}, payload) => {
    commit(auth.AUTH_LOGIN_START);
    commit(auth.AUTH_LOGIN_ERROR, false);

    const url = api.generateUrl('passport/login');
    console.log(url);
    return api.post(url, payload)
        .then(() => {
            commit(auth.AUTH_LOGIN_END);
        })
        .catch(error => {
            commit(auth.AUTH_LOGIN_END);
            commit(auth.AUTH_LOGIN_ERROR, true, error.message);
        });
};

export const logout = ({commit}) => {
    api.removeHeader();
    Token.removeToken();
}