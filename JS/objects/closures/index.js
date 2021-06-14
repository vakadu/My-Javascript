// function z() {
//     var b = 900;
//     function x(){
//         var a = 10;
//         function y() {
//             console.log(a, b);
//         }
//         a = 100;
//         y();
//     }
//     x();
// }

// z();


function x(){

    for(var i=1; i<=5; i++){
        setTimeout(function(){
            console.log(val, 'i')
        }, val * 1000)
    }

    // for(var i=1; i<=5; i++){
    //     function close(val){
    //         setTimeout(function(){
    //             console.log(val, 'i')
    //         }, val * 1000)
    //     }
    //     close(i);
    // }

    // for(let i=1; i<=5; i++){
    //     setTimeout(function(){
    //         console.log(i, 'i')
    //     }, i * 1000)
    // }
}

x();



// function x(){
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x()();
// var z = x();
// at line number 8 function x is called, so it will be removed from exection context. But somehow
// 10 is printed in the console. reason was closures, it somehow remebers that a and the fuunction.
// Closures are basically functions along with lexical scope bundled together forms closures. 
// z();
// console.log(z);