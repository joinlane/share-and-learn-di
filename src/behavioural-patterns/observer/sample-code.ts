import { ConcreteSubject } from './_derived-classes/ConcreteSubject';
import Subject from './_base-classes/Subject';

class ConcreteObserverA implements IObserver {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log('ConcreteObserverA: Reacting to event.');
    }
  }
}

class ConcreteObserverB implements IObserver {
  update(subject: Subject): void {
    if (
      subject instanceof ConcreteSubject &&
      (subject.state === 0 || subject.state >= 2)
    ) {
      console.log('ConcreteObserverB: Reacted to event.');
    }
  }
}

function main() {
  const subject = new ConcreteSubject();

  const observer1 = new ConcreteObserverA();
  subject.attach(observer1);

  const observer2 = new ConcreteObserverB();
  subject.attach(observer2);

  [0, 1, 2, 3, 4, 5].forEach(() => {
    subject.increment(); // Do business logic that modifies the state of an instance.
  });

  subject.detach(observer1);

  subject.increment();

  subject.detach(observer2);
}

main();
