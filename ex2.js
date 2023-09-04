const nam='ram';
typeof(nam);
const value1 = 900719925124740998n; 
// Adding two big integers 
const result1 = value1 + 1n; 
console.log(result1); // "900719925124740999n" 
const value2 = 900719925124740998n; 
// Error! BitInt and number cannot be added 
const result2 = value2 + 1; 
console.log(result2);
const dataChecked = true; 
const valueCounted = false; 
let name; 
console.log(name); // undefined
const number=null;