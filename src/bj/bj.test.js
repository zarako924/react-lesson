// @flow

import type {Card, Game, Hand} from "./bj"
import {cardName, cardPoints, createGame, gameHit, gameMsg, gameStay, handMsg, handPoints} from "./bj"

it('test card', () => {
  const c1: Card = {value: 1, suit: 1};
  const c2: Card = {value: 13, suit: 4};

  expect(cardName(c1)).toEqual('Ace of Spades');
  expect(cardPoints(c1)).toEqual(1);

  expect(cardName(c2)).toEqual('King of Diamonds');
  expect(cardPoints(c2)).toEqual(10);
});

it('test Hand', () => {
  const h: Hand = {name: "Player", cards: []};
  expect(handPoints(h)).toEqual(0);
  expect(handMsg(h)).toEqual("0 Points");

  h.cards.push({value: 1, suit: 1});
  expect(handPoints(h)).toEqual(1);
  expect(handMsg(h)).toEqual("1 Points");

  h.cards.push({value: 13, suit: 4});
  expect(handPoints(h)).toEqual(11);
  expect(handMsg(h)).toEqual("11 Points");

  h.cards.push({value: 10, suit: 4});
  expect(handPoints(h)).toEqual(21);
  expect(handMsg(h)).toEqual("Black Jack!");

  h.cards.push({value: 10, suit: 3});
  expect(handPoints(h)).toEqual(31);
  expect(handMsg(h)).toEqual("Bust!");

});


it('test Game', () => {
  const g1: Game = createGame()
  expect(g1.ph.cards.length).toEqual(2);
  expect(g1.dh.cards.length).toEqual(2);
  expect(g1.deck.length).toEqual(48);
  expect(gameMsg(g1)).toEqual("Press Hit or Stay");

  const g2 = gameHit(g1);
  expect(g2.ph.cards.length).toEqual(3);
  expect(g2.dh.cards.length).toEqual(2);
  expect(g2.deck.length).toEqual(47);

  const g3 = gameStay(g2);
  expect(g3.ph.cards.length).toEqual(3);
  expect(g3.dh.cards.length).toBeGreaterThanOrEqual(2);
  expect(g3.deck.length).toBeLessThanOrEqual(47);


});
