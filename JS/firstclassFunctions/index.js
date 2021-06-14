//func statement or func declaration
function a(){
    console.log("hello");
}

//func expression
var b = function(){
    console.log("hello");
}

//difference between func statement and expression is hoisting

//anonymous func
// function(){
//     console.log("hello");
// }

//named func expression
var c = function xyz(){
    console.log(xyz);
}

c();

//differnce btw parameters and args
// var d = function(params){
//     console.log("hello");
// }
// d(args);

//first class funcs
//ability to uses funcs to use as values, passing funcs as params and args.

//arrow funcs
