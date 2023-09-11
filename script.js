function firstChar(text) {
  // your code here
	let s=text.trim();
	return s.charAt(0);
}

// Do not change the code below 

const text = prompt("Enter text:");
alert(firstChar(text));
let tr=document.getElementbyId("tr");

let td=document.createElement("td");
let textNode=document.createTextNode(`firstChar('${text}')`);
tr.appendChild(td);