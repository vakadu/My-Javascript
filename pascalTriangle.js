// https://leetcode.com/problems/pascals-triangle/

var generate = function(numRows) {
/*
    input: 5
    output:
    [
        [1]
        [1,1]
        [1,2,1]
        [1,3,3,1]
        [1,4,6,4,1]
    ]

*/

    // declare an array of size numRows
    let arr = new Array(numRows);

    // generate row by row
    // row[0] = 1
    // row[row.length-1] = 1
    for(let i=0; i<numRows; i++){
        let row = new Array(i+1);
        row[0] = 1;
        row[row.length - 1] = 1;

        // since row of 1st and last will be always 1, now you to look at prevous row ie., i-1 and 
        // i will add next elemts

        for(let j=1; j<row.length - 1; j++){
            let rowAbove = arr[i-1];
            row[j] = rowAbove[j] + rowAbove[j-1]
        }
        console.log(arr, 'arr');

        arr[i] = row;
    }     

    console.log(arr);

};

generate(5);
