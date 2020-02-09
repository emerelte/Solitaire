import {easy, medium, hard} from "./GameSetups";
import {coordsOfNonExistingCard, idOfInvalidTarget, idOfTargetOfEmptyColumn} from "./Constants";

export const findFontColor = (card) => {
    return card.shape === 'spades' || card.shape === 'clubs' ? 'black' : 'red';
};

const createCardDeck = (nrOfSuites) => {
    let cardDeck = [];
    let listOfShapes = [];
    if (nrOfSuites === 4)
        listOfShapes = ['spades', 'clubs', 'hearts', 'diams'];
    else if (nrOfSuites === 2)
        listOfShapes = ['spades', 'hearts'];
    let i = 0;
    for (const shape of listOfShapes) {
        for (let val = 1; val < 14; ++val) {
            cardDeck.push({'shape': shape, 'value': val, 'id': i, 'hidden': true});
             ++i;
        }
    }
    return cardDeck;
};

const shuffleArray = (arr) => {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
};

export const createShuffledCardDeck = (nrOfSuites) => {
    return shuffleArray(createCardDeck(nrOfSuites));
};

export const showCard = (card) => {
    card.hidden = false;
};

const isKing = (card) => {
    return card.value === 13;
};

const isAce = (card) => {
    return card.value === 1;
};

export const areCardsInRightOrder = (cards) => {
    if (cards.length < 2)
        return true;
    for (let i = 1; i < cards.length; ++i) {
        if (findFontColor(cards[i]) === findFontColor(cards[i - 1]) || cards[i].value !== cards[i - 1].value - 1) {
            return false;
        }
    }
    return true;
};

const isPossibleToMoveCardBetweenColumns = (movingCard, targetCard) => {
    return findFontColor(movingCard) !== findFontColor(targetCard) &&
        movingCard.value === targetCard.value - 1;
};


export const mapGameLevelToGameSetup = (level) => {
    let dict = {0: easy, 1: medium, 2: hard};
    return dict[level];
};

export const convertValueOfCardToDisplayedSymbol = (cardValue) => {
    const displayedSymbols = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'B', 'Q', 'K'];
    return displayedSymbols[cardValue - 1];
};

export const decodeHtml = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

const convertMinutesToHours = (minutes) => {
    return minutes / 60;
};

export const formatReadableTimeFromMs = (timeInMiliseconds) => {
    let formattedTime = "";
    console.log(timeInMiliseconds);
    const seconds = timeInMiliseconds.getSeconds();
    const minutes = timeInMiliseconds.getMinutes();
    const hours = timeInMiliseconds.getHours() + convertMinutesToHours(timeInMiliseconds.getTimezoneOffset());

    if (hours < 10) {
        formattedTime += "0";
    }
    formattedTime += hours + ":";

    if (minutes < 10) {
        formattedTime += "0";
    }
    formattedTime += minutes + ":";

    if (seconds < 10) {
        formattedTime += "0";
    }
    formattedTime += seconds;

    return formattedTime;
};

const isRightCardToPlaceInTarget = (card, lastTargetCard) => {
    if (lastTargetCard === undefined) {
        if (isAce(card))
            return true;
    } else {
        if (card.shape === lastTargetCard.shape
            && card.value === lastTargetCard.value + 1)
            return true;
    }
    return false;
};

export const calculateTopPositionOfColumnTarget = (columnLength) => {
    return columnLength === 0 ? 0 : (columnLength - 1) * (9.4 * 0.15);
};

export const initializeGame = (gameLevel) => {
    const gameMode = mapGameLevelToGameSetup(gameLevel);
    let cardDeck = createShuffledCardDeck(gameMode.nrOfSuites);
    let cardsPlacedInColumns = cardDeck.slice(0, gameMode.nrOfCols * gameMode.nrOfCardsInColumn);
    let stock = cardDeck.slice(gameMode.nrOfCols * gameMode.nrOfCardsInColumn, cardDeck.length);
    let tableauPiles = [];
    for (let i = 0; i < gameMode.nrOfCols; ++i) {
        let cardsInColumn = cardsPlacedInColumns.slice(i * gameMode.nrOfCardsInColumn, (i + 1) * gameMode.nrOfCardsInColumn);
        showCard(cardsInColumn[cardsInColumn.length - 1]);
        tableauPiles.push(cardsInColumn);
    }
    return {
        tableauPiles: tableauPiles,
        stock: stock
    }
};

export const createTableauTargets = (card, tableauPiles) => {
    let tableauTargets = [];
    tableauPiles.forEach((column) => {
            if (column.length === 0) {
                if (isKing(card))
                    tableauTargets.push({'id': idOfTargetOfEmptyColumn});
                else
                    tableauTargets.push({'id': idOfInvalidTarget});
            } else if (isPossibleToMoveCardBetweenColumns(card, column[column.length - 1]))
                tableauTargets.push({'id': column[column.length - 1].id});
            else
                tableauTargets.push({'id': idOfInvalidTarget});
        }
    );
    return tableauTargets;
};

export const createFoundationsTargets = (card, foundations) => {
    let foundationsTargets = [];
    for (let i = 0; i < foundations.length; ++i) {
        if (isRightCardToPlaceInTarget(card, foundations[i][foundations[i].length - 1])) {
            foundationsTargets.push({'id': i});
        } else {
            foundationsTargets.push({'id': idOfInvalidTarget})
        }
    }
    return foundationsTargets;
};

const getCardAt = (tableauPiles, colIdx, rowIdx) => {
    return tableauPiles[colIdx][rowIdx];
};

const getCardCoords = (tableauPiles, card) => {
    for (let i = 0; i < tableauPiles.length; ++i) {
        if (tableauPiles[i].indexOf(card) !== -1)
            return {"column": i, "row": tableauPiles[i].indexOf(card)};
    }
    return coordsOfNonExistingCard;
};

export const getListOfBoundCards = (card, tableauPiles) => {
    let sourceCardCoords = getCardCoords(tableauPiles, card);
    let column = sourceCardCoords.column;
    let row = sourceCardCoords.row;
    let boundCards = [];
    while (row < tableauPiles[column].length) {
        boundCards.push(getCardAt(tableauPiles, column, row));
        row++;
    }
    return boundCards;
};
