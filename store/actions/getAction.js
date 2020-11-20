import {allAdds,myAdds} from '../../src/helpers/db'

export const showAll = () => {
    return async (dispatch) => {
      dispatch({type: 'RESET_ADD_LIST', payload: null});
      try {
        const addsResult = await allAdds();
        dispatch({type: 'SHOW_ALL', payload: addsResult.rows});
      } catch (err) {
        console.log('Klaida');
        throw err;
      }
    };
  };

  export const showMy = (user) => {
    return async (dispatch) => {
      dispatch({type: 'RESET_ADD_LIST', payload: null});
      try {
        const addsResult = await myAdds(user);
        dispatch({type: 'SHOW_ALL', payload: addsResult.rows});
      } catch (err) {
        console.log('Klaida');
        throw err;
      }
    };
  };