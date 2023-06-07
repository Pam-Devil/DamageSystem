import { DamageCore } from "../cores/DamageCore";
import { Attributes } from "../Structs/Attributes";
import { IEntity } from "../interfaces/IEntity";

export class Player implements IEntity {
    public static instance: Player;
    private _PlayerHealth: number = 500

    constructor(){}

    public get PlayerHealth():number {
        return this._PlayerHealth;
    }
    public setPlayerHealth(new_health: number):void {
       this._PlayerHealth = new_health;
    }
  public static getInstance() {
    if (!Player.instance) {
      Player.instance = new Player();
    }
    return Player.instance;
  }


    walk(delta: number, Vector3D: object): void {
        return;
    }
    Attack(damageCore: DamageCore, attributes: Attributes): void {
        return;
    }
    public takeDamage(damage:number){
        const new_health = this._PlayerHealth - damage;
        this.setPlayerHealth(new_health);
        console.log("Player health after damage calculation:", this._PlayerHealth);
    }
}