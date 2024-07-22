console.log("Hello first.js");
console.log("oooo");
// console.log(global);
// console.log(__dirname);
// console.log(__filename);

const { log } = require("console");
// const {add, multiply} = require("./math");
// console.log(add(2, 3));

const os = require("os");
const path = require("path");

// console.log(os.arch());
// console.log(os.type());
// console.log(os.cpus());
// console.log(os.machine());
// console.log(os.totalmem());

console.log(path.join(__dirname, "apps", "myapp"));
console.log(path.parse(__filename));
