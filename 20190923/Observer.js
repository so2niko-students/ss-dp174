class Subject {
    constructor() {
        this.observers = [];
        this.state = {};
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter(el => el !== observer);
    }

    notify() {
        this.observers.forEach(obs => obs.update(this));
    }

    someBusinessLogic() {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

