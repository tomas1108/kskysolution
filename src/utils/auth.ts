import Cookies from 'js-cookie';

const auth = {
  get getToken() {
    return Cookies.get('token');
  },
  set setAuth(token: string) {
    Cookies.set('token', token, {
      expires: 3600
    });
  }
};

export default auth;
