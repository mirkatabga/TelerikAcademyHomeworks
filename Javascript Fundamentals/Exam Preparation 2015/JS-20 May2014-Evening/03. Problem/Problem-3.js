﻿function solve(args) {
    var input = args,
        countOfKeyValuePairs = parseInt(input[0]),
        properties = [],
        model = {};

    for (var line = 1; line <= countOfKeyValuePairs; line++) {
        properties.push(input[line]);
    }

    console.log(properties.forEach(function(string){
        console.log(string.split('-'));
    }));
}



(function () {
    var test0 = ['6', 'title-Telerik Academy', 'showSubtitle-true', 'subTitle-Free training', 'showMarks-false', 'marks-3;4;5;6', 'students-Ivan;Gosho;Pesho', '42', '<nk-template name="menu">', '    <ul id="menu">', '        <li>Home</li>', '        <li>About us</li>', '    </ul>', '</nk-template>', '<nk-template name="footer">', '    <footer>', '        Copyright Telerik Academy 2014', '    </footer>', '</nk-template>', '<!DOCTYPE html>', '<html>', '<head>', '    <title>Telerik Academy</title>', '</head>', '<body>', '    <nk-template render="menu" />', '    <h1><nk-model>title</nk-model></h1>', '    <nk-if condition="showSubtitle">', '        <h2><nk-model>subTitle</nk-model></h2>', '        <div>{{<nk-model>subTitle</nk-model>}} ;)</div>', '    </nk-if>', '    <ul>', '        <nk-repeat for="student in students">', '            <li>', '                <nk-model>student</nk-model>', '            </li>', '            <li>Multiline <nk-model>title</nk-model></li>', '        </nk-repeat>', '    </ul>', '    <nk-if condition="showMarks">', '        <div>', '            <nk-model>marks</nk-model>', '        </div>', '    </nk-if>', '    <nk-template render="footer" />', '</body>', '</html>'];

    solve(test0);
}());