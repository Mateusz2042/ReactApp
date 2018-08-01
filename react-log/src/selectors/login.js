import { find } from 'lodash';

export const checkLogin = (login, password, usersData) => {
  const user = find(usersData, e => e.login === login);

  if (user && user.password === password) {
    return true;
  }
  return false;
};
