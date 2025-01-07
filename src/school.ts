export class School {
  #funds: number;
  #name: string;

  constructor(name: string) {
    this.#funds = 0;
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get funds(): number {
    return this.#funds;
  }

  set funds(funds: number) {
    this.#funds += funds;
  }

  static whatIsThis(): string {
    return "This is a place where education & knowledge is shared by the teachers.";
  }
}
