import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

const TOKEN_KEY = 'PT';

const Token = {
    set(token){
        Cookies.set(TOKEN_KEY, token);
    },

    get() {
        return Cookies.get(TOKEN_KEY)
    },

    remove(){
        Cookies.remove(TOKEN_KEY);
    },
}

export default Token;