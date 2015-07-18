(function(){
    var colorElem = document.getElementById('color'),
        bodyElem = document.getElementsByTagName('body')[0];

    colorElem.oninput = function () {
        bodyElem.style.backgroundColor = colorElem.value;
    }
}())