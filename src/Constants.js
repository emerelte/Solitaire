import PropTypes from "prop-types";

export const idOfInvalidTarget = -1;
export const idOfTargetOfEmptyColumn = 0;
export const coordsOfNonExistingCard = {"column": -1, "row": -1};

export const CardType = PropTypes.shape({
    shape: PropTypes.string,
    hidden: PropTypes.bool,
    id: PropTypes.number,
    value: PropTypes.number
});
