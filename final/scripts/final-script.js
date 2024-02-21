let deckResponse;
let deckId;
centerText = document.getElementById('centerText')
playerDrawnImg = document.getElementById('playerDrawnCard')
opponentDrawnImg = document.getElementById('opponentDrawnCard')
let playerDeckSpot = 0;
let opponentDeckSpot = 0;

let cardValues = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'JACK': 11, 'QUEEN': 12, 'KING': 13, 'ACE': 14
};
autoRunCheckbox = document.getElementById('autoRunCheckbox')

let openCardCodes = [];


const getDeck = async () => {
    centerText.innerHTML = ""
    playerDrawnImg.src = ""
    opponentDrawnImg.src = ""

    const newDeck = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    if (newDeck.ok) {
        deckResponse = await newDeck.json();
        deckId = deckResponse.deck_id
    };

    const drawDeck = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=26`)
    if (drawDeck.ok) {
        deckResponse = await drawDeck.json();
    };
    const cardCodes1 = deckResponse.cards.map(card => card.code);
    const AddDeckOne = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/player/add/?cards=${cardCodes1.join(',')}`)
    if (AddDeckOne.ok) {
        deckResponse = await AddDeckOne.json();
    };

    const drawDeckTwo = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=26`)
    if (drawDeckTwo.ok) {
        deckResponse = await drawDeckTwo.json();
    };
    const cardCodes2 = deckResponse.cards.map(card => card.code);
    const AddDeckTwo = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/opponent/add/?cards=${cardCodes2.join(',')}`)
    if (AddDeckTwo.ok) {
        deckResponse = await AddDeckTwo.json();
    };

    drawCardButton.disabled = false;
};

const getDeckButton = document.getElementById('newGameButton');
getDeckButton.addEventListener('click', getDeck);



const drawCard = async () => {
    centerText.innerHTML = ""
    drawCardButton.disabled = true;

    turnActive = true
    while (turnActive == true) {
        centerText.innerHTML = ""
        playerResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/player/draw/bottom/?count=1`);
        if (playerResponse.ok) {
            playerHand = await playerResponse.json();
        };

        playerCardValue = cardValues[playerHand.cards[0].value];
        playerCardCode = playerHand.cards[0].code;
        openCardCodes.push(playerCardCode)
        playerDrawnImg.src = playerHand.cards[0].image;


        opponentResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/opponent/draw/bottom/?count=1`);
        if (opponentResponse.ok) {
            opponentHand = await opponentResponse.json();
        };

        opponentCardValue = cardValues[opponentHand.cards[0].value];
        opponentCardCode = opponentHand.cards[0].code;
        openCardCodes.push(opponentCardCode);
        opponentDrawnImg.src = opponentHand.cards[0].image;

        if (playerCardValue > opponentCardValue) {
            centerText.innerHTML = "Player Wins!"
            openCardCodes.reverse()
            await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/player/add/?cards=${openCardCodes.join(',')}`);
            openCardCodes = [];
            turnActive = false;

        }
        else if (playerCardValue < opponentCardValue) {
            centerText.innerHTML = "Opponent Wins!"
            await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/opponent/add/?cards=${openCardCodes.join(',')}`);
            openCardCodes = [];
            turnActive = false;

        }
        else if (playerCardValue == opponentCardValue) {
            centerText.innerHTML = "WAR!"

            await new Promise(pause => setTimeout(pause, 1000))


            for (i = 0; i < 2; i++) {
                const playerWarResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/player/draw/?count=1`)
                if (playerWarResponse.ok) {
                    playerWarHand = await playerWarResponse.json();
                };
                playerWarValue = cardValues[playerWarHand.cards[0].value];
                playerWarCode = playerWarHand.cards[0].code;
                openCardCodes.push(playerWarCode)
                playerDrawnImg = document.getElementById('playerDrawnCard')
                playerDrawnImg.src = playerWarHand.cards[0].image;


                const opponentWarResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/opponent/draw/?count=1`)
                if (opponentWarResponse.ok) {
                    opponentWarHand = await opponentWarResponse.json();
                };
                opponentWarValue = cardValues[opponentWarHand.cards[0].value];
                opponentWarCode = opponentWarHand.cards[0].code;
                openCardCodes.push(opponentWarCode)
                opponentDrawnImg = document.getElementById('opponentDrawnCard')
                opponentDrawnImg.src = opponentWarHand.cards[0].image;

            }
        };


        if (autoRunCheckbox.checked) {
            turnActive = true;
        }

        playerDeckResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/player/list/`)
        if (playerDeckResponse.ok) {
            playerDeckData = await playerDeckResponse.json();
            playerDeck = playerDeckData.piles.player.cards.map(card => card.code);
            document.getElementById('playerScore').innerHTML = playerDeckData.piles.player.remaining
        }
        opponentDeckResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/opponent/list/`)
        if (opponentDeckResponse.ok) {
            opponentDeckData = await opponentDeckResponse.json();
            opponentDeck = opponentDeckData.piles.opponent.cards.map(card => card.code);
            document.getElementById('opponentScore').innerHTML = opponentDeckData.piles.opponent.remaining
        }
        if (playerDeckData.piles.player.remaining <= 0 || opponentDeckData.piles.opponent.remaining <= 0) {
            centerText.innerHTML = "GAME OVER";
            drawCardButton.disabled = true;
            return;
        }
    };

    drawCardButton.disabled = false;

};

const drawCardButton = document.getElementById('drawButton');
drawCardButton.addEventListener('click', drawCard);


