(function () {
    var urlString = "https://github.com/TelerikAcademy/JavaScript-Fundamentals/tree/master/11.%20Strings".toString();

    parseUrl(urlString);
}());

function parseUrl(urlString) {
    var colon = ':',
        rightSlash = '/',
        countOfSlashes = 0,
        protocol = '',
        server = '',
        resource = '';

    for (var i = 0; i < urlString.length; i++) {
        if (urlString[i] === colon) {
            for (var j = 0; j < i; j++) {
                protocol += urlString[j];
            }
        }

        if (countOfSlashes < 3) {
            if (urlString[i] === rightSlash) {
                countOfSlashes++;
                if (countOfSlashes === 3) {
                    var k = i - 1;
                    while (urlString[k - 1] != rightSlash) {
                        k--;
                    }

                    for (var m = k; m < i; m++) {
                        server += urlString[m];
                    }

                    i-=1;
                }
            }
        }
        else {
            resource += urlString[i];
        }

        
    }

    var urlObj = {
        protocol: protocol,
        server: server,
        resource: resource
    }

    console.log(urlObj);
}