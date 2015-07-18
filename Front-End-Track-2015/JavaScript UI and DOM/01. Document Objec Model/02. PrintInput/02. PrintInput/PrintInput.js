//Create a function that gets the value of <input
//type="text"> ands prints its value to the console

(function () {
    var textField = document.getElementById('input'),
        printBtn = document.getElementById('print');

    printBtn.onclick = function () {
        console.log(textField.value);
    }
}())