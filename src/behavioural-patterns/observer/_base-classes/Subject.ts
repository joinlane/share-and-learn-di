export default abstract class Subject implements ISubject {
  protected _observers: Set<IObserver>;

  constructor() {
    this._observers = new Set();
  }

  attach<T extends IObserver>(observer: T): void {
    this._observers.add(observer);
  }

  detach<T extends IObserver>(observer: T): void {
    if (!this._observers.has(observer)) {
      throw new Error('Nonexistent observer.');
    }

    this._observers.delete(observer);
  }

  notify(): void {
    for (const observer of this._observers) {
      observer.update(this);
    }
  }
}
