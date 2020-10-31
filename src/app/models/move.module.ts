export class Move {
  public toId: string = '';
  private to: string = '';
  private amount: number = 0;
  public at: number = Date.now();

  constructor(obj) {
    this.toId = obj.toId;
    this.to = obj.to;
    this.amount = obj.amount;
    this.at = obj.at || Date.now();
  }
  
}