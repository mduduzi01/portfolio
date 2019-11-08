var people = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Tony", "Bobby"];
var otherPeople = ["Teddy", "Cathy", "G-berg", "Georgie"];

people = people.concat(otherPeople);
//people = people.indexOf("Eddie");
//people = people.join(" # ");
//people = people.lastIndexOf("Bobby");
//people = people.pop();
//people.pop();
//people = people.push("Teddy");
//people.push("Teddy");
//people = people.reverse();
//people = people.shift();
//people.shift();
//people = people.unshift("Teddy");
//people.unshift("Teddy");
//people = people.slice(0,3);
//people = people.sort();
//people.splice(1,0,"Cathy");


document.getElementById("peopleIKnow").innerHTML = people.valueOf();