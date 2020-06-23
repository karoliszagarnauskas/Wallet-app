console.log("veikiu");


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var b3 = $("#b3"), b4 = $("#b4");
$('#b4,#b3').click(function(){
    console.log('clicked2', this.id);
});

  $('#b4, #b3').click(function () {
  if (this.id == 'b3') {
  var jsonObj = $('#my-form').serializeArray();
  $('#out').val(JSON.stringify(jsonObj) +($('select').val())+" "+($('#b3').val())  );
  if (document.getElementById('field').value > 16667) {
  var x = document.getElementById('field').value;
   y = x*0.03/100;
  if (y>5) {
    console.log(5);
  // console.log($('#out').val());
  // $('#outSelect').val(JSON.stringify($('select').val()));
  // $('#out').val(JSON.stringify(jsonObj) +($('input').val()));
}
}else if (document.getElementById('field').value < 16667) {
  var x = document.getElementById('field').value;
  y = x*0.03/100;

  console.log(Math.ceil(y * 100) / 100 );
}
}else if (this.id == 'b4') {
  var jsonObj = $('#my-form').serializeArray();
  $('#out').val(JSON.stringify(jsonObj) +($('select').val())+" "+($('#b4').val())  );
  if (document.getElementById('field').value) {
  var x = document.getElementById('field').value;
   y = x*0.3/100;

   console.log(Math.ceil(y * 100) / 100 );

}

// else if (document.getElementById('field').value < 16667) {
//   var x = document.getElementById('field').value;
//   y = x*0.03/100;
//
//   console.log(Math.ceil(y * 100) / 100 );
// }
}});



//cash-in
// if (($('select').val()) > 16666) {
// var math = ($('select').val()) * 0.3/100;
// console.log(math);
// }else {
//   // var math = 5;
//   // console.log(math);
// }

// document.querySelectorAll('.current').forEach(item => {
//   item.addEventListener('click', event => {
//     const data = getData('#my-form');
//     console.log(data);
//     console.log(JSON.stringify(data));
//   })
// })
// console.log(today);
//
// var myJSON = {
// 	"date": "today",
// 	"user_id": 1,
// 	"value": "Natural",
// 	"Add Money": {
// 		"Amount": 200.00,
//     "Currency": "Eur"
// 	}
// };
// convertedtostring = JSON.stringify(myJSON);
// console.log(convertedtostring);
//
// document.querySelector('footer').innerHTML += convertedtostring;
