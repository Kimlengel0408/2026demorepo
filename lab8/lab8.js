let variableName = prompt("Message to display", "optional default value");

function rollDie(faces) {
    console.log(Math.floor(Math.random() * faces) + 1);
};

rollDie(variableName);