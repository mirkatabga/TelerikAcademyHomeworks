(function () {
    String.prototype.bind = function (str, obj) {
        var pattern = /data\-bind-[a-z]+="[a-z]+"/g,
            dataBinds = str.match(pattern),
            strData = dataBinds.toString();

        dataBinds = '';
        dataBinds = strData.replace(/data-bind-/g , '');

        dataBinds = (dataBinds.split(','));
        for (var i in dataBinds) {
            if (dataBinds[i].match('content=')) {
                var value = dataBinds[i].match(/".+?"/);
                value = value[0];
                value = value.replace(/"/g, '');
                for (var j in obj) {
                    if (j === value) {
                        var startIndex = (str.indexOf('>'));
                        startIndex += 1;
                        var lastIndex = startIndex;

                        while (str[lastIndex] != '<') {
                            lastIndex += 1;
                        }
                        var leftSubstr = str.substring(0, lastIndex);
                        var rightSubstr = str.substring(lastIndex, str.length);
                        str = '';
                        str += (leftSubstr + obj[j] + rightSubstr);
                    }
                }
            }
            else {
                for (var k in obj) {
                    var value = dataBinds[i].match(/".+?"/);
                    value = value[0];
                    value = value.replace(/"/g, '');
                    if (value === k) {
                        dataBinds[i] = dataBinds[i].replace(value, obj[k]);
                    }
                }
                var end = str.indexOf('>');
                var leftSubstring = str.substring(0, end);
                var rightSubstring = str.substring(end, str.length);

                str = '';
                str += (leftSubstring + ' ' + dataBinds[i] + rightSubstring);
            }
        }
        return str;
    }

    var bindingString = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>',
        elena = { name: 'Elena', link: 'http://telerikacademy.com' };

    var result = bindingString.bind(bindingString, elena);

    console.log(result);
}());