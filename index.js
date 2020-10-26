const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");

const fivePlusSeven = (a, b) => a + b;

const addFive = a => a + 5;

console.log(fivePlusSeven(5, 7));
console.log(addFive(12));

let groet = () => { return ({ greeting: "hoi" }); };
let groetje = groet();
console.log("Gegroet :" + groetje["greeting"]);

ikRockArrowFunctions()

//comment