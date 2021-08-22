import * as auth from "./types";
import api from "../../utils/api";
import Token from "../../utils/token";

export const login = ({commit}, payload) => {
    commit(auth.AUTH_LOGIN_START);
    commit(auth.AUTH_LOGIN_ERROR, false);

    //const url = api.generateUrl('passport/login');
    const url = process.env.passport_url + "/login";
    return api.post(url, payload)
        .then(({data}) => {
            Token.set(data.token);
            commit(auth.AUTH_LOGIN_SET_TOKEN, data.token);
            commit(auth.AUTH_LOGIN_END, data);
        })
        .catch(error => {
            commit(auth.AUTH_LOGIN_END);
            commit(auth.AUTH_LOGIN_ERROR, true, error.message);
        });
};

export const logout = ({commit}) => {
    api.removeHeader();
    Token.remove();
}