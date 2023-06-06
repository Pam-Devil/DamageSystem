"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slime = void 0;
class Slime {
    constructor(name, currentLevel, position) {
        this.name = name;
        this.currentLevel = currentLevel;
        this.position = position;
        const attributes = this.setAttributes();
        this.attributes = attributes;
    }
    setAttributes() {
        return {
            Slash: 30,
            Impact: 20,
            Piercing: 60
        };
    }
    getAttributes() {
        return this.attributes;
    }
    walk(delta, Vector3D) {
        console.log("Slime is walking!");
    }
    Attack(damageCore, attributes) {
        this.name;
    }
}
exports.Slime = Slime;
