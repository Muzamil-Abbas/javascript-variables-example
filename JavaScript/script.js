// Different types of JavaScript variables

// Using var
var fullName = "Muzamil Abbas"; // Can be redeclared and updated
console.log("Full Name using var:", fullName);

// Using let
let age = 30; // Block scoped, can be updated but not redeclared
console.log("Age using let:", age);

// Using const
const pi = 3.14159; // Block scoped, cannot be updated or redeclared
console.log("Value of Pi using const:", pi);

// Output to the HTML page
document.getElementById("output").innerHTML = `
    Full Name (var): ${fullName} <br>
    Age (let): ${age} <br>
    Value of Pi (const): ${pi}
`;
