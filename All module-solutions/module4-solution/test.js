//Wrap Everything with:

(function  (){




	}) ();




//function object

function a () {
	console.log ("Hello Coursera!");
}

a();


var a = (function () {
	console.log ("Hello Coursera!");
});

a();

// IIFE - Something that produces a value - produces a function object value

(function () {
	console.log ("Hello Coursera!");
})();



(function (name) {
	console.log ("Hello " + name);
})("Coursera!");

// Immediately Invoked Function Expression
// IIFE
(function (name) {
  console.log("Hello " + name);
})("Coursera!");



(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);


(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);
