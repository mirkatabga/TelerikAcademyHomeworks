var int = 22;
var float = 12.123;
var string = "duuuuh";
var boolean = true;
var arr = [1, 2, 3, 4, 5, "a", true, 12.3];
var obj = { fn: "Pesho", ln: "Peshov", age: 22 };
var nullVariable = null;
var undefinedVariable;
var funcVariable = function func() { return null; };

var variables = [int, float, string, boolean, arr, obj, nullVariable, undefinedVariable, funcVariable];

for (var i = 0; i < variables.length; i++) {
    console.log(typeof (variables[i]), variables[i]);
}