import {easy, medium, hard} from "./GameSetups";

export const findFontColor = (card) => {
    return card.color === 'spades' || card.color === 'clubs' ? 'black' : 'red';
};

export const createCardDeck = (p_nrOfSuites) => {
    let cardDeck = [];
    let listOfColors = [];
    if (p_nrOfSuites === 4)
        listOfColors = ['spades', 'clubs', 'hearts', 'diams'];
    else if (p_nrOfSuites === 2)
        listOfColors = ['spades', 'hearts'];
    let i = 0;
    for (const color of listOfColors) {
        for (let val = 1; val < 14; ++val) {
            cardDeck.push({'color': color, 'value': val, 'id': i, 'hidden': true});
            ++i;
        }
    }
    return cardDeck;
};

export const shuffleArray = (arr) => {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
};

export const createShuffledCardDeck = (p_nrOfSuites) => {
    return shuffleArray(createCardDeck(p_nrOfSuites));
};

export const showCard = (card) => {
    card.hidden = false;
};

export const isKing = (p_card) => {
    return p_card.value === 13;
};

export const isAce = (p_card) => {
    return p_card.value === 1;
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

export const isPossibleToMoveCardBetweenColumns = (movingCard, targetCard) => {
    return findFontColor(movingCard) !== findFontColor(targetCard) &&
        movingCard.value === targetCard.value - 1;
};


export const mapGameLevelToGameSetup = (p_level) => {
    let dict = {0: easy, 1: medium, 2: hard};
    return dict[p_level];
};

export const convertValueOfCardToDisplayedSymbol = (p_cardValue) => {
    const displayedSymbols = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'B', 'Q', 'K'];
    return displayedSymbols[p_cardValue - 1];
};

export const decodeHtml = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

const convertMinutesToHours = (p_minutes) => {
    return p_minutes / 60;
};

export const formatReadableTimeFromMiliseconds = (p_timeInMiliseconds) => {
    let l_formattedTime = "";
    const l_seconds = p_timeInMiliseconds.getSeconds();
    const l_minutes = p_timeInMiliseconds.getMinutes();
    const l_hours = p_timeInMiliseconds.getHours() + convertMinutesToHours(p_timeInMiliseconds.getTimezoneOffset());

    if (l_hours < 10) {
        l_formattedTime += "0";
    }
    l_formattedTime += l_hours + ":";

    if (l_minutes < 10) {
        l_formattedTime += "0";
    }
    l_formattedTime += l_minutes + ":";

    if (l_seconds < 10) {
        l_formattedTime += "0";
    }
    l_formattedTime += l_seconds;

    return l_formattedTime;
};

export const isRightCardToPlaceInTarget = (p_card, p_lastTargetCard) => {
    if (p_lastTargetCard === undefined) {
        if (isAce(p_card))
            return true;
    } else {
        if (p_card.color === p_lastTargetCard.color
            && p_card.value === p_lastTargetCard.value + 1)
            return true;
    }
    return false;
};

export const calculateTopPositionOfColumnTarget = (p_columnLength) => {
    return p_columnLength === 0 ? 0 : (p_columnLength-1) * (9.4 * 0.15);
};