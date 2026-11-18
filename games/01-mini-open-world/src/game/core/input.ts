export class Input {
  private down = new Set<string>();
  private pressed = new Set<string>();

  private onKeyDown = (e: KeyboardEvent): void => {
    if (!e.repeat) this.pressed.add(e.code);
    this.down.add(e.code);
    if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
  };

  private onKeyUp = (e: KeyboardEvent): void => {
    this.down.delete(e.code);
  };

  private onBlur = (): void => {
    this.down.clear();
  };

  attach(): void {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);
  }

  detach(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
  }

  isDown(code: string): boolean {
    return this.down.has(code);
  }

  anyDown(...codes: string[]): boolean {
    return codes.some((c) => this.down.has(c));
  }

  consume(code: string): boolean {
    if (this.pressed.has(code)) {
      this.pressed.delete(code);
      return true;
    }
    return false;
  }

  endFrame(): void {
    this.pressed.clear();
  }
}
