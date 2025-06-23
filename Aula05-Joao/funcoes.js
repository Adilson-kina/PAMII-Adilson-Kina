// A function that returns a string 
function greetings(name) {
    return "Greetings ".concat(name, "!");
}
console.log(greetings('Ray'));
function showUser(user) {
    console.log("Name: ".concat(user.name));
    console.log("Age: ".concat(user.age));
    console.log("Email: ".concat(user.email));
}
showUser({
    name: 'John',
    age: 12,
    email: 'john@gmail.com'
});
function listNames(names) {
    names.forEach(function (name) { return console.log(name); });
}
listNames(['Ana', 'Clara', 'Charles']);
