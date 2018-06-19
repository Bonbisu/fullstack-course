var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentageOfY');

form.addEventListener('submit', function() {
    var x = numField1.value;
    var y = numField2.value;
    
    console.log(x);
    console.log(y);
});


//Another way to call this function ahead, chaining functions
//
//document.getElementById('xIsWhatPercentageOfY').addEventListener('submit', function() {
//    alert("We clickeyclacked something!");
//});




