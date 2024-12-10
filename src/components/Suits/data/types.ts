export interface Suit 
{
    id: number,
    name: string;
    image: string;
    abilities: string;
}

export interface BatmanSuit extends Suit {}

export interface IronManSuit extends Suit {}
