interface ISubject {
  attach(observer: IObserver): void;

  detach(observer: IObserver): void;

  notify(): void;
}
