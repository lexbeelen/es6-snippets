/* ECMAScript 2016 (ES6) - Example 1 */
const computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];

const allComputersCanRunProgram = computers.every(function (computer) {
    return computer.ram > 16;
});

console.log(allComputersCanRunProgram);

/* ECMAScript 2016 (ES6) - Example 2 */
const names = [
    "Lex",
    "Lauren",
    "Boaz"
];

const allNamesGreaterThanTwo = names.every(function (name) {
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

const username = new Field("2cool");
const password = new Field("my_password");
const birthdate = new Field("10/10/2010");

const fields = [username, password, birthdate];

const formIsValid = fields.every(function (field) {
   return field.validate();
});

if(formIsValid) {
    console.log('Success')
} else {
    console.log('Error: Invalid')
}
