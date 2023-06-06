export class InputSystem {
    private keyMap: Record<string, () => void> = {};
  
    constructor() {
      this.initialize();
    }
  
    private initialize(): void {
      this.addKeyDownListener(this.handleKeyDown.bind(this));
    }
  
    private addKeyDownListener(callback: (event: KeyboardEvent) => void): void {
      // Mocking addEventListener for non-browser environment
      if (typeof window === 'undefined') {
        const readline = require('readline');
        readline.emitKeypressEvents(process.stdin);
        process.stdin.on('keypress', callback);
      } else {
        window.addEventListener('keydown', callback);
      }
    }
  
    private handleKeyDown(event: KeyboardEvent): void {
      const key = event.key.toLowerCase();
      if (key === 'a') {
        // Trigger attack action
        if (this.keyMap.attack) {
          this.keyMap.attack();
        }
      } else {
        // Reset the game for any other key
        if (this.keyMap.reset) {
          this.keyMap.reset();
        }
      }
    }
  
    public onAttack(callback: () => void): void {
      this.keyMap.attack = callback;
    }
  
    public onReset(callback: () => void): void {
      this.keyMap.reset = callback;
    }
  }

  