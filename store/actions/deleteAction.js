import {deleteAdd} from '../../src/helpers/db'

export const removeAdd = (id) => {
    return async (dispatch) => {
      dispatch({type: 'RESET_ADD_LIST', payload: null});
      try {
        const dbResult = await deleteAdd(id);
        console.log(dbResult);
        dispatch({type: 'DELETE_ADD', payload: {id: id}});
      } catch (err) {
        throw err;
      }
    };
  };