/* ECMAScript 2016 (ES6) - Example 1 */
let computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];

let allComputersCanRunProgram = computers.every(function (computer) {
    return computer.ram > 16;
});

console.log(allComputersCanRunProgram);

/* ECMAScript 2016 (ES6) - Example 2 */
let names = [
    "Lex",
    "Lauren",
    "Boaz"
];

let allNamesGreaterThanTwo = names.every(function (name) {
    return name.length > 2;
});

console.log(allNamesGreaterThanTwo);

/* ECMAScript 2016 (ES6) - Example 3 */
function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
};

let username = new Field("2cool");
let password = new Field("my_password");
let birthdate = new Field("10/10/2010");

let fields = [username, password, birthdate];

let formIsValid = fields.every(function (field) {
   return field.validate();
});

if(formIsValid) {
    console.log('Success')
} else {
    console.log('Error: Invalid')
}
