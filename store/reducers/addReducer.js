const initialState = {
    adds:[],
};

export const addReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ShOW_ALL':
            return{
                adds:{...state.adds},
            };
    default:
        return state;
    }
}