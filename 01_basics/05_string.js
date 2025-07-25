const name = "Souvik";
const repo = 125;

console.log(`My name is ${name} and I have ${repo} repositories on GitHub.`);


const newName = new String("SouvikSS")

// console.log(typeof newName); // object not an array

console.log(newName[2]); // "u"
console.log(newName.length); // 8
console.log(newName.charAt(2)); // "u"
console.log(newName.charCodeAt(2)); // 117 (Unicode value of 'u')
console.log(newName.indexOf("Sk")); // -1 (not found)
console.log(newName.indexOf("SS")); // 6 (first occurrence)
console.log(newName.lastIndexOf("S")); // 6
console.log(newName.includes("S")); // true
console.log(newName.startsWith("S")); // true
console.log(newName.endsWith("SS")); // true    
console.log(newName.slice(0, 5)); // "Souvik"
console.log(newName.substring(0, 5)); // "Souvik"
console.log(newName.substr(0, 5)); // "Souvik"
console.log(newName.toLowerCase()); // "souvikss"
console.log(newName.toUpperCase()); // "SOUVIKSS"
console.log(newName.trim()); // "SouvikSS" (removes whitespace from both ends)
console.log(newName.split("S")); // ["", "ouvik", "", "SS"]
console.log(newName.replace("Souvik", "John")); // "JohnSS" 
console.log(newName.repeat(2)); // "SouvikSSSouvikSS"
// console.log(newName.valueOf()); // "SouvikSS" (returns the primitive value of the String object)