const obj = {
    name: "Marko",
    regularFunction: function() {
      console.log("Regular function this:", this.name);
    },
    arrowFunction: () => {
      console.log("Arrow function this:", this.name);
    },
    es6Method(age) {
      console.log("ES6 method this:", this.name + ":", age);
    }
  };
  
  obj.regularFunction(); // Regular function this: [object Object]
  obj.arrowFunction();   // Arrow function this: [object Window] (or global object in a non-browser environment)
  obj.es6Method(25);       // ES6 method this: [object Object]
  