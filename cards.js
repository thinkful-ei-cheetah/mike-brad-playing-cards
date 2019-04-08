'use strict';

class Card {
  constructor() {
    this.deck = [];

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }
}

const deck1 = new Card();
console.log(Math.random(deck1.deck([1])));

function randomCard(){
  let randomCards = [];
  for (i = 0; i < randomCard.length; i++) {

  }
}


// stack to initate drawing from the deck
class Stack extends Card {

}

// stack to discard cards from the deck
class discardStack extends Card {
  
}

// draw cards from `Stack` and after discard to `discardStack`
class Game extends Card {

  // console.log string of card + suits;
}