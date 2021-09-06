export default class Student extends Person {
    constructor(name, age, std) {
      super(name, age);
      this.std = std;
    }
    read() {
      console.log("read");
    }
  }
  