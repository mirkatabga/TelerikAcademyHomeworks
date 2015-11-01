(function () {

    var Pesho = {
        firstName: "Pesho",
        lastname: "Peshev",
        age: 21,
        city: "Veliko Turnovo",
        seeProfile: function () {
            var str = "\nFirst name:" + this.firstName + "\nLast name: " + this.lastname + "\nAge: " + this.age + "\nCity: " + this.city;
            return str;
        }
    }

    var formatedStr = "{0} is currently {2} big amount of {1}, but you can see his profile: {3}";
    console.log(formatedStr);

    var str = stringFormat(formatedStr, Pesho.firstName, 'beer', 'drinking', Pesho.seeProfile());
    console.log(str);

}());

function stringFormat(string, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26, arg27, arg28, arg29) {
    try {
        if (typeof(stringFormat.arguments[0]) !== typeof('')) {
            throw "Wrong format exception. The first argument should be from type string.";
        }

        var maxArg = -1,
            argCount = stringFormat.arguments.length - 1;

        for (var i = 0; i < string.length; i++) {
            if (string[i] === '{' && string[i+2] === '}') {
                if (parseInt(string[i + 1])) {
                    var argNumber = parseInt(string[i + 1]);
                    if (argNumber > maxArg) {
                        maxArg = argNumber;
                    }
                }
            }
        }

        if (maxArg > argCount) {
            throw "Argument count exception. Index must be greater or equel to zero and less than the size of the argument list";
        }
        else if (maxArg > -1) {
            for (var i = 0; i < string.length; i++) {
                if (string[i] === '{' && string[i + 2] === '}') {
                    if (parseInt(string[i + 1]) || '0') {
                        var argNumber = parseInt(string[i + 1]),
                            newString = string.replace('{' + argNumber + '}', stringFormat.arguments[argNumber + 1]);
                        string = '';
                        string += newString;
                    }
                }
            }

            return string;
        }
        else {
            return string;
        }
        
    } catch (err) {
        console.log(err);
        return;
    }

}