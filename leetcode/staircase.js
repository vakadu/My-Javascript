// https://leetcode.com/problems/climbing-stairs/

function staircase(n) {
    if(n === 1 || n === 0) return 1;
    // let first = 1;
    // let second = 2;

    // for(i=3; i<=n; i++){
    //     let third = first + second;
    //     first = second;
    //     second = third;
    // }
    // console.log(second);
    // return second;

    let arr = [1, 1];
    for(i=2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    let last = arr.pop();
    console.log(last);
    // console.log(arr[arr.length-1]);

}

staircase(6);
