// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Correct Testing Usage
const keys = getKeys(student); // Pass the object to the function
console.log(keys); // Output: ["name"]

// Additional Example
const studentWithMoreProps = {
  name: "John",
  age: 20,
  city: "New York",
};

const moreKeys = getKeys(studentWithMoreProps); // Pass the object to the function
console.log(moreKeys); // Output: ["name", "age", "city"]
