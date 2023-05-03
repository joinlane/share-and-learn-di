import Subject from '../_base-classes/Subject';

export class ConcreteSubject extends Subject {
  public state: number;

  constructor() {
    super();
    this.state = 0;
  }

  increment(): void {
    this.state += 1;
    this.notify();
  }
}
