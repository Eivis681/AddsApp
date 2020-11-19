import {createUser, insertAdd} from '../../src/helpers/db'

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

  export const addAdd = (title,description,phoneNumber,price,userId) => {
    return async (dispatch) => {
      try {
        const dbResult = await insertAdd(title, description, phoneNumber, price, userId);
        console.log(dbResult);
        dispatch({
          type: 'ADD_ADD',
          payload: {id: dbResult.insertID, title: title, description: description, phoneNumber: phoneNumber, price: price, userId:userId},
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  };