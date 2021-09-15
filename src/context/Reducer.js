const Reducer = (state, action) => {
    switch (action.type) {
        case "GET_CATEGORY_LIST":
            return {
                ...state,
                categoryList: action.payload,
            };
        case "GET_PRO_LIST":
            return {
                ...state,
                proList: action.payload,
            };
        case "SET_FILTER_PARAMS":
            return {
                ...state,
                category: action.payload.category,
                postCode: action.payload.postCode,
            };
        default:
            return state;
    }
};

export default Reducer;
