export interface IPrograming<T> {
  apply: () => T;
}

export class ProgramingPrint implements IPrograming<string> {
  constructor(private toPrint: string) {
  };

  apply(): string {
    return this.toPrint;
  }
}

export class ProgramingWhileDo implements IPrograming<void> {
  constructor(private condition: IPrograming<boolean>, private instructions: IPrograming<void>) {
  };

  apply(): void {
    while (this.condition.apply()) {
      this.instructions.apply();
    }
  }
}

export class ProgramingVariable implements IPrograming<>
