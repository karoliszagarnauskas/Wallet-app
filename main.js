console.log("veikiu");
// var today = new Date().toISOString().substr(0, 10);
// document.querySelector("#today").value = today;

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

function addMoney() {
  var field  = document.querySelector("#field").value;
  console.log(field);
  if(document.getElementById('select').value == "Natural") {
  document.querySelector("footer").innerHTML += "Money added:"+" -"+ field +"," + " Natural person" +" ,"+'<br>'+date+ "<br>";
}
if(document.getElementById('select').value == "Legal"){
  document.querySelector("footer").innerHTML += "Money added:"+" -"+ field +"," + " Legal person" +" ,"+date+ "<br>";
}
}
function withdrawMoney() {
  var field  = document.querySelector("#field").value;
  console.log(field);
  if(document.getElementById('select').value == "Natural") {
  document.querySelector("footer").innerHTML += "Money withdrawn:"+" -"+ field +"," + " Natural person" +" ,"+date+ "<br>";
}
if(document.getElementById('select').value == "Legal"){
  document.querySelector("footer").innerHTML += "Money withdrawn:"+" -"+ field +"," + " Legal person" + " ,"+date+ "<br>";
}
}

// document.write(today);
