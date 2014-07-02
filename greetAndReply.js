
function returnHello(name) {
  return "Hello, " + name + ".";
}

function greetAndReply(personName, myName) {
  return returnHello(personName) + " My name is " + myName;
}

console.log(greetAndReply("Delmer", "Anil"));
