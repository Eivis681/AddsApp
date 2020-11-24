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
          var newArray =[...state.adds];
          state.adds=[];
          var indexx = newArray.findIndex((add) => add.ID === action.payload.id);
          newArray[indexx].Title = action.payload.title;
          newArray[indexx].Description = action.payload.description;
          newArray[indexx].Price = action.payload.price;
          newArray[indexx].PhoneNumber = action.payload.phoneNumber;
          return{
            adds: newArray
          };
      case 'SHOW_ALL':
        var addList = [];
        for (let i = 0; i < action.payload.length; ++i) {
          console.log(action.payload.item(i));
          addList.push(action.payload.item(i));
        }
        return {adds: [...state.adds, ...addList]};
      
      case 'DELETE_ADD':
        var array =[...state.adds];
        const index = array.findIndex((add) => add.ID === action.payload.id);
        console.log('deleted id ' + index)
        array.splice(index,1);
        return {
          adds: array,
        };
      case 'RESET_ADD_LIST':
        return {adds: []};
      default:
        return state;
    }
  };