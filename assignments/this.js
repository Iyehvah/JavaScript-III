/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1 : Window Binding!
// Window binding is when you try to use this without any context. It then refers to JavaScript itself.
// code example for Window Binding
// console.log(this)

// Principle 2 : Implicit Binding!
// Implicit binding is when you give THIS a reference by declaring something before a "."
// code example for Implicit Binding
// const OBJ = {
//     greeting: 'Ello world',
//     sayHello: function(name) {
//         console.log(`${this.greeting}`);
//         console.log(this); **THIS is refering to our object we created (OBJ)**
//     }
// }

// Principle 3 : New Binding!
// New binding is when a constructor function is used and creates an OBJect which in turn the THIS refers to that object created.

// code example for New Binding
// function IntroduceYoSelf(greeter) {
//     this.greeting = 'Hello ';
//     this.greeter = greeter;
//     this.speak = function() {
//       console.log(this.greeting + this.greeter);
//       console.log(this);
//     };
//   }

// Principle 4 : Explicit Binding!
// Explicit Binding is where you can redifine what THIS is by calling it or applying it to a new object
// code example for Explicit Binding
// function IntroduceYoSelf(greeter) {
//       this.greeting = 'Hello ';
//       this.greeter = greeter;
//       this.speak = function() {
//         console.log(this.greeting + this.greeter);
//         console.log(this);
//       };
//      }
//  const Robert = new IntroduceYoSelf('Jose');

// 