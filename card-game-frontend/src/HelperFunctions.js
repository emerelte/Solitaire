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

export const isHiddenCard = (card) => {
    return card.hidden;
};

export const showCard = (card) => {
    card.hidden = false;
};

export const isKing = (card) => {
    return card.value === 13
};

export const areCardsInRightOrder = (cards) => {
    if (cards.length < 2)
        return true;
    for (let i = 1; i< cards.length; ++i)
    {
        if (findFontColor(cards[i]) === findFontColor(cards[i - 1]) || cards[i].value !== cards[i - 1].value - 1)  {
            return false;
        }
    }
    return true;
};