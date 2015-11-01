(function () {
    var button = document.getElementById("searchBtn");

    button.onclick = function () {
        var isCaseSensitive = document.getElementById("caseSensitive").checked,
            loremIpsum = document.getElementsByTagName("article")["loremIpsum"],
            text = loremIpsum.innerHTML,
            search = document.getElementById("searchTxt").value;
        if (search !== "") {
            if (isCaseSensitive) {
                searchWord(search, text, isCaseSensitive);
            }
            else {
                searchWord(search, text);
            }
        }
        else {
            var noticeDiv = document.getElementById("notice");
            noticeDiv.innerHTML = "Please add word to search for.";
            noticeDiv.style.display = "block";
        }
    };

    function searchWord(search, text, isCaseSensitive) {
        switch (searchWord.arguments.length) {
            case 2: {
                searchWordCaseInSensitive(search, text);
                break;
            }
            case 3: {
                searchWordCaseSensitive(search, text, true);
            }
            default:
                console.log("invalid arguments for function \"searchWeb\" ");
        }
    };

    function searchWordCaseInSensitive(textToSearch, inText) {
        var searchForRegExp,
            clearText,
            newText;

        searchForRegExp = new RegExp('(\\b' + textToSearch + '\\b)', 'gim');
        clearText = inText.replace(/(<span>|<\/span>)/gim, '');
        newText = clearText.replace(searchForRegExp, '<span>$1</span>');

        document.getElementById('loremIpsum').innerHTML = newText;
        document.getElementById('notice').style.display = 'none';

        if (clearText === newText) {
            document.getElementById('notice').style.display = 'block';
            document.getElementById('notice').innerHTML = '<p>' + textToSearch + ' not found</p>';
        }
    }

    function searchWordCaseSensitive(textToSearch, inText) {
        var searchForRegExp,
            clearText,
            newText;

        searchForRegExp = new RegExp('(\\b' + textToSearch + '\\b)', 'gm');
        clearText = inText.replace(/(<span>|<\/span>)/gim, '');
        newText = clearText.replace(searchForRegExp, '<span>$1</span>');

        document.getElementById('loremIpsum').innerHTML = newText;
        document.getElementById('notice').style.display = 'none';

        if (clearText === newText) {
            document.getElementById('notice').style.display = 'block';
            document.getElementById('notice').innerHTML = '<p>' + textToSearch + ' not found</p>';
        }
    }
}());