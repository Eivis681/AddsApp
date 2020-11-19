import {createUser} from '../../src/helpers/db'

export const addUser = (username, password) => {
    return async (dispatch) => {
      dispatch({type: 'RESET_USER_LIST', payload: null});
      try {
        const dbResult = await createUser(username, password);
        console.log(dbResult);
        dispatch({
          type: 'CREATE_USER',
          payload: {
            username: username,
            password: password,
          },
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  };