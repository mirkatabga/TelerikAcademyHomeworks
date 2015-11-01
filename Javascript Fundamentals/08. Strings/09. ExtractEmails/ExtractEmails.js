(function () {

    var text = 'A name that identifies an electronic post office box on a network where e-mail can be sent. Different types of networks have different formats for e-mail addresses. On the Internet, all e-mail addresses have the form: For example, webmaster@sandybay.com, "pesho_e_pich@gosho.com" or "pisha@domashno.ch". Every user on the Internet has a "unique" e-mail address. The term e-addressis commonly used as an abbreviation for e-mail address';

    console.log(text);
    console.log("Extracted in array:");
    extractEmails(text);
}());

function extractEmails(text) {
    var pattern = new RegExp(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi);
    var emails = text.match(pattern);
    console.log(emails);
}