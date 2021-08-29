const Reducer = (state,action) => {
    switch (action.type) {
        case 'GET_CATEGORY_LIST':
            return {
                ...state,
                categoryList: action.payload,
            };
        case 'GET_PRO_LIST':
            return {
                ...state,
                proList: action.payload,
            };
        default:
            return state;

    }
}

export default Reducer;
