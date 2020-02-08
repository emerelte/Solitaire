import PropTypes from "prop-types";

const cardsOnTheTable = (state = {}, action) => {
    console.log(action.type);
    switch (action.type) {
        case "INIT_GAME":
            return {
                tableauPiles: action.tableauPiles,
                foundations: Array.from({length: 4}, e => []),
                stock: action.stock
            };
        case "DEAL_CARDS":
            return {
                tableauPiles: state.tableauPiles.map((column, index) => (
                    index < state.stock.length ? [...column, state.stock[index]] : [...column]
                )),
                foundations: state.foundations,
                stock: state.stock.slice(state.tableauPiles.length, state.stock.length)
            };
        default:
            return {tableauPiles: [], foundations: [], stock: []}
    }
};

export default cardsOnTheTable
