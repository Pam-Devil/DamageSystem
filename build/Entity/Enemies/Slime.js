"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slime = void 0;
const RNGessus_1 = require("../../cores/RNGessus");
class Slime {
    constructor(name, currentLevel, position, accuracy) {
        this.name = name;
        this._currentLevel = currentLevel;
        this._position = position;
        this._attributes = this.setAttributes();
        this._accuracy = accuracy;
    }
    setAttributes() {
        return {
            Slash: 30,
            Impact: 20,
            Piercing: 60
        };
    }
    get Attributes() {
        return this._attributes;
    }
    walk(delta, Vector3D) {
        console.log("Slime is walking!");
        return;
    }
    Attack(damageCore, attributes) {
        console.log(`${this.name} is attacking!`);
        const RNgessus = new RNGessus_1.RNGessus();
        if (RNgessus.attackEvent(this._accuracy) == false) {
            console.log(`${this.name} failed his attack`);
            return;
        }
        console.log(`${this.name} landed his attack. calculating the damage dealt`);
        damageCore.doDamage(this.name, this.Attributes);
        return;
    }
}
exports.Slime = Slime;
