let id = 0;

const columnsOfCards = (state = [], action) => {
    console.log("XDDD");
    switch (action.type) {
        case 'ADD_CARD':
            return [
                ...state,
                {
                    hidden: false,
                    value: 1,
                    color: "clubs"
                }
            ];
        default:
            return state
    }
};

export default columnsOfCards