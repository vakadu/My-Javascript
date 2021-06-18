//JS is syncronous single threaded

// setTimeout(function(){
//     console.log("timer");
// }, 3000);

// function x(y){
//     console.log("x");
//     y();
// }

// x(
//     function y(){
//         console.log("y");
//     }
// );

function clickMe() {
    var count = 0;
    document.getElementById("clickme").addEventListener("click", function xyz(){
        count++;
        console.log(count);
    });
};

clickMe();
