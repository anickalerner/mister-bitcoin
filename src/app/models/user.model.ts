import { Move } from './move.module';

export class User {
    public name: string = '';
    public coins: number = 100;
    public moves: Move[] = [];
    constructor(obj) {
        this.name = obj.name;
        this.coins = obj.coins;
        this.moves = obj.moves;
    }

    public addMove(move: Move) {
        this.moves.push(move);
    }

}