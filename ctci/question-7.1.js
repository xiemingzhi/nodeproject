function Card(suite, name) {
    this.suite = suite;
    this.name = name;
    this.value = 0;
}

//Deck of cards
//A Deck has 52 cards, new Deck creates 52 cards, calls shuffle
//Consumers call deal to get cards
function Deck() {
    this.suites = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.cards = []; //array of Card

    this.generateCards = function () {
        for (suite of this.suites) {
            for (name of this.names) {
                let card = new Card(suite, name);
                this.cards.push(card);
            }
        }
    };
    this.generateCards();

    this.listCards = function () {
        for (card of this.cards) {
            console.log(card.name, 'of', card.suite);
        }
    }

    this.shuffle = function () {
        this.cards.sort(() => Math.random() - 0.5);
    }
    this.shuffle();

    this.deal = function (n) {
        let toretcards = [];
        if (this.cards.length > n) {
            for (let i = 0; i < n; i++) {
                toretcards.push(this.cards.pop());
            }
        }
        return toretcards;
    }
}

let deck = new Deck();
deck.listCards();
//poker game first deal 2 cards
let player1cards = [];
player1cards.push(...deck.deal(2));
console.log('player1 cards', player1cards);
