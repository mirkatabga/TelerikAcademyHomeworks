(function () {
    String.prototype.format = function (options) {
        var text = this;

        for (var prop in options) {
            var regEx = new RegExp('#{' + prop + '}','g');
            var newText = text.replace(regEx, options[prop]);
            text = '';
            text += newText;
            newText = '';
        }

        return text;
    };


    var ivan = { name: 'Ivan', age: 19 },
        text = "My name is #{name} and I am #{age}-years-old";

    var result = text.format(ivan);
    console.log(result);
}());

