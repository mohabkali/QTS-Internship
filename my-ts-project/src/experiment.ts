// src/experiment.ts
// Add a comment here
function calculateArea(width:number, height:number) { // Parameters 'width' and 'height' implicitly have an 'any' type.
  return width * height;
}

// there is an error

let result = calculateArea(5, 10);
console.log(`The area is \${result}`);
