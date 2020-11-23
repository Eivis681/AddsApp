const initialState = {
    adds:[],
};

export const addReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ADD':
        console.log('+'+action.payload.id)
        const newAdd = {
          ID : action.payload.id,
          Title: action.payload.title,
          Description: action.payload.description,
          PhoneNumber: action.payload.phoneNumber,
          Price: action.payload.price,
          UserId: action.payload.userId,
        };
        return {
          adds: state.adds.concat(newAdd),
        };
        case 'UPDATE_ADD':
          const newArray ={...state.adds}
          const indexx = state.adds.findIndex((add)=>add.id === action.payload.id)
          newArray[indexx].title = action.payload.title;
          newArray[indexx].description = action.payload.description;
          newArray[indexx].price = action.payload.price;
          newArray[indexx].phoneNumber = action.payload.phoneNumber;
          return{
            ...state, adds: newArray
          };
      case 'SHOW_ALL':
        const addList = [];
        alert('jezus')
        for (let i = 0; i < action.payload.length; ++i) {
          console.log(action.payload.item(i));
          addList.push(action.payload.item(i));
        }
        return {adds: [...state.adds, ...addList]};
      
      case 'DELETE_ADD':
        const index = state.adds.findIndex((add) => add.id === action.payload.id);
        console.log(action.payload.id);
        return {
          adds: [...state.adds.slice(0, index), ...state.adds.slice(index + 1)],
        };
      case 'RESET_ADD_LIST':
        return {adds: []};
      default:
        return state;
    }
  };