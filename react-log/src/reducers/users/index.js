import { SET_USERS, SET_LOGIN_REGULAR_FIELD } from '../../constants/users';

const initialState = {
  usersData: {},
  login: '',
  password: '',
};
const actions = {
  [SET_LOGIN_REGULAR_FIELD]: (state, { payload: { key, value } }) => {
    const data = {
      ...state,
      [key]: value,
    };

    return { ...data };
  },
  [SET_USERS]: (state, { payload }) => {
    const data = {
      ...state,
      usersData: payload,
    };

    return { ...data };
  },
};

export default (state = initialState, action) => {
  if (actions[action.type]) return actions[action.type](state, action);
  return state;
};
