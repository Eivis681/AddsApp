const initialState = {
    adds:[],
};

export const addReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ADD':
        const newAdd = {
          ID: action.payload.id,
          Title: action.payload.title,
          Description: action.payload.description,
          PhoneNumber: action.payload.phoneNumber,
          Price: action.payload.price,
          UserId: action.payload.userId,
        };
        return {
          adds: state.adds.concat(newAdd),
        };
      case 'SHOW_ALL':
        const addList = [];
        for (let i = 0; i < action.payload.length; ++i) {
          addList.push(action.payload.item(i));
          console.log(action.payload.item(i));
        }
        return {adds: [...state.adds, ...addList]};
      case 'DELETE_ADD':
        const index = state.adds.findIndex((add) => add.id === action.payload.id);
        return {
          adds: [...state.adds.slice(0, index), ...state.adds.slice(index + 1)],
        };
      case 'RESET_ADD_LIST':
        return {adds: []};
      default:
        return state;
    }
  };