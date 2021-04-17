/*function makeWorker(){
    let name="Ani";
    return function(){
        console.log(name);
    };
}
let name="Armine";
let work=makeWorker();
work();*/

/*function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // есть доступ к внешней переменной "count"
    };
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() );*/

 /* function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  
  let counter1 = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter1() ); // 0
  console.log( counter1() ); // 1
  
  console.log( counter2() );*/

  /*let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();*/


/*function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }*/


  /*function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }
  
  console.log( sum(1)(2) ); // 3
  console.log( sum(5)(-1)(2) ); // 6
  console.log( sum(6)(-1)(-2)(-3) ); // 0
  console.log( sum(0)(1)(2)(3)(4)(5) ); // 15*/

  /*let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) );*/

/*let sayHi = new Function('console.log("goodby")');

sayHi();*/

/*function getFunc() {
    let name = "Andre";
  
    let func = new Function('console.log(name)');
  
    return func;
  }
  
  getFunc()();//eror:????*/

 /* function getFunc() {
    let name = "Valod";
  
    let func = new Function(console.log(name));
  
    return func;
  }
  
  getFunc()();//valod*/

 /* let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() );*/


/*class User {

  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("i have name");
      return;
    }
    this._name = value;
  }

}

let user = new User("Anushik");
console.log(user.name); 

user = new User("")*/

/*class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();*/
