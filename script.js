// Create the student object
const student = {
  name: "John", // The object has a property called 'name'
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj); // Object.keys() retrieves the array of keys in the object
}

// Testing the function
console.log(getKeys(student)); // Expected Output: ["name"]

// Additional Tests
const testObject1 = { name: "Alice", age: 30, city: "New York" };
console.log(getKeys(testObject1)); // Expected Output: ["name", "age", "city"]

const testObject2 = { name: "Bob" };
console.log(getKeys(testObject2)); // Expected Output: ["name"]
