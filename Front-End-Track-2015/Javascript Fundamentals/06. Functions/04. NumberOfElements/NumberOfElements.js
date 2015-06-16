(function () {
    var body = document.getElementsByTagName("body")[0],
        countOfDivs = 0;

    addsRandomNumberOfDivesInElement(body);
    countOfDivs = getCountOfDivsWithinElement(body);
    console.log("count of divs: " + countOfDivs);
}());

function addsRandomNumberOfDivesInElement(parent) {
        randomNumber = getRandomInt(20, 100);

    for (var i = 0; i < randomNumber; i++) {
        var element = document.createElement("div"),
            node = document.createTextNode("div: " + i);
        element.appendChild(node);
        parent.appendChild(element);
    }
};

function getCountOfDivsWithinElement(element) {
    var count = element.getElementsByTagName("div").length;
    return count;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}