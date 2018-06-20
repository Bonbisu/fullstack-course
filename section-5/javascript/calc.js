var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentageOfY');


form.addEventListener('submit', function() {
    
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields")
    } else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
    }    
});



//Another way to call this function ahead, chaining functions
//
//document.getElementById('xIsWhatPercentageOfY').addEventListener('submit', function() {
//    alert("We clickeyclacked something!");
//});




