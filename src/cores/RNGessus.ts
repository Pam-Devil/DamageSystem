export class RNGessus {
  attackEvent(accuracy: number): number {
    return this.inBetween(1,10);
  } 
  inBetween(min:number,max:number){
    return Math.floor(
        Math.random() * (max - 1 - min) * min + 1
    )
  }
}
