const mult = (a, b) => {
  console.log(a * b);
};
class Person {
  constructor(name) {
    this.name = name;
  }
  whatsMyName() {
    console.log(this.name);
  }
}
const kader = new Person('kader');
kader.whatsMyName();
mult(5, 10);

console.log('hello world');

/*

 "serve": "npm run watch && npm run start",
  "start": "webpack-dev-server --progress --colors",
  "watch": "webpack -w"

  */
