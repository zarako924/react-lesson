// @flow

export type Card = {
  value: number, //1-13
  suit: number   //1-4
}

export type Hand = {
  cards: Array<Card>,
  name: string   //player or dealer
}

export type Game = {
  deck: Array<Card>,
  ph: Hand,
  dh: Hand,
  isStay: boolean
}


function cardValueName(c: Card): string {
  const v = c.value;
  if (v === 1) return 'Ace';
  if (v >= 2 && v <= 10) return String(v);
  if (v === 11) return 'Jack';
  if (v === 12) return 'Queen';
  if (v === 13) return 'King';
  throw Error('Bad value[' + v + ']');
}

function cardSuitName(c: Card): string {
  const s = c.suit;
  if (s === 1) return 'Spades';
  if (s === 2) return 'Hearts';
  if (s === 3) return 'Clubs';
  if (s === 4) return 'Diamonds';
  throw Error('Bad suit[' + s + ']');
}

export function cardName(c: Card): string {
  return cardValueName(c) + " of " + cardSuitName(c);
}

export function cardPoints(c: Card): number {
  const v = c.value;
  if (v >= 1 && v <= 9) return v;
  if (v >= 10 && v <= 13) return 10;
  throw Error('Bad value[' + v + ']');
}


function deckCreate(): Array<Card> {
  const a = [];
  for (let suit = 1; suit <= 4; suit++) {
    for (let value = 1; value <= 13; value++) {
      a.push({value, suit});
    }
  }
  for (let i = 0; i < 10000; i++) {
    const i1 = Math.floor(Math.random() * 52);
    const i2 = Math.floor(Math.random() * 52);
    const c1 = a[i1];
    const c2 = a[i2];
    a[i1] = c2;
    a[i2] = c1;
  }
  return a;
}

function deckTake(deck: Array<Card>, num: number): [Array<Card>, Array<Card>] {
  const deckCopy = [...deck]
  const cards = []
  for (let i = 0; i < num; i++) {
    cards.push(deckCopy.shift())
  }
  return [cards, deckCopy]
}


export function handPoints(hand: Hand): number {
  let p = 0
  hand.cards.forEach(c => p += cardPoints(c))
  return p
}

export function handMsg(hand: Hand) {
  const p = handPoints(hand)
  if (p > 21) return "Bust!";
  if (p === 21) return "Black Jack!";
  return p + " Points";
}


export function createGame(): Game {
  const deck: Array<Card> = deckCreate()
  const [a, d]:[Array<Card>, Array<Card>] = deckTake(deck, 4)

  const phCards: Array<Card> = [a[0], a[1]]
  const dhCards: Array<Card> = [a[2], a[3]]

  const ph: Hand = {cards: phCards, name: "Player"}
  const dh: Hand = {cards: dhCards, name: "Dealer"}
  return {
    deck: d,
    ph,
    dh,
    isStay: false
  }
}

export function gameHit(g: Game): Game {
  const [a, d] = deckTake(g.deck, 1)
  return {
    deck: d,
    ph: {name: g.ph.name, cards: [...g.ph.cards, a[0]]},
    dh: g.dh,
    isStay: g.isStay
  }
}

export function gameStay(g: Game): Game {
  let dh = {name: g.dh.name, cards: [...g.dh.cards]}
  let dd = [...g.deck]

  while (handPoints(dh) < 17) {
    const [a, d] = deckTake(dd, 1)
    dh.cards = [...dh.cards, a[0]]
    dd = d
  }

  return {
    deck: dd,
    ph: g.ph,
    dh: {...g.dh, cards: dh.cards},
    isStay: true
  }

}

export function gameIsActive(g: Game): boolean {
  return !g.isStay && handPoints(g.ph) < 21;
}

export function gameMsg(g: Game): string {
  const isActive = gameIsActive(g)
  if (isActive) return "Press Hit or Stay";
  if (handPoints(g.dh) > 21) return "Player Wins!";
  if (handPoints(g.ph) > 21) return "Dealer Wins!";
  if (handPoints(g.ph) > handPoints(g.dh)) return "Player Wins!";
  return "Dealer Wins!";
}


export type BjAction = {
  type: "deal" | "hit" | "stay"
}

export function bjReducer(g: Game = createGame(), action: BjAction): Game {
  if (action.type === "deal") return createGame()
  if (action.type === "hit") return gameHit(g)
  if (action.type === "stay") return gameStay(g)
  return g
}


