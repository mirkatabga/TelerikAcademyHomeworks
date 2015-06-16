(function () {

    var people = [
        { name: 'Peter', age: 14 },
        { name: 'Ivan', age: 20 },
        { name: 'Gosho', age: 23 },
        { name: 'Maria', age: 18 }
    ];
    var tmpl = document.getElementById('list-item');
    var peopleList = generateList(people, tmpl.innerHTML);
    tmpl.innerHTML = peopleList;
    //peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'

}());

function generateList(people, template) {

    templateList = '<ul>';
    var templateCopy = template;
    
    for (var i in people) {
        var obj = people[i],
            templNew = ''

        for (var j in obj) {
            templNew = ''
            templNew = template.replace('-{' + j + '}-', obj[j]);
            template = '';
            template = templNew;
        }

        template = templateCopy;
        templateList += '\n    <li>' + templNew + '</li>\n';
    }

    templateList += '</ul>';
    console.log(templateList);

    return templateList;
}

