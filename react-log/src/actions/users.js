import * as types from '../constants/users';

export const setUsers = data => (
  { type: types.SET_USERS, payload: data }
);

export const setRegularField = regularData => (
  { type: types.SET_LOGIN_REGULAR_FIELD, payload: regularData }
);

const mockUsers = {
  page: 1,
  total_pages: 1,
  items: [
    {
      login: 'Mateusz',
      password: '123',
    },
    {
      login: 'Kasia',
      password: '123',
    },
    {
      login: 'Magda',
      password: '123',
    },
  ],
};

export const getUsers = () => (dispatch) => {
  dispatch(setUsers(mockUsers));
};
