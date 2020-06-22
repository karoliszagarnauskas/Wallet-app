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
  // $('#outSelect').val(JSON.stringify($('select').val()));
  // $('#out').val(JSON.stringify(jsonObj) +($('input').val()));
}else if (this.id == 'b4') {
  var jsonObj = $('#my-form').serializeArray();
  $('#out').val(JSON.stringify(jsonObj) +($('select').val())+" "+($('#b4').val())  );
}
});

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
