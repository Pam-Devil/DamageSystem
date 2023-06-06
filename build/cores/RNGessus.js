"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNGessus = void 0;
class RNGessus {
    attackEvent(accuracy) {
        const attempt = this.inBetween(1, 10);
        if (attempt >= accuracy) {
            console.log(`attempt was: ${attempt}`);
            return false;
        }
        console.log(`attempt was: ${attempt}`);
        return true;
    }
    inBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) * min);
    }
}
exports.RNGessus = RNGessus;
