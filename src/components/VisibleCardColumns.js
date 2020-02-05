import { connect } from 'react-redux'
import CardColumns from "./CardColumns";
import columnsOfCards from "../reducers/columnsOfCards";

const mapStateToProps = state => ({
    columnsOfCards: state.columnsOfCards
});

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardColumns)