function removeDuplicates(arr){
    // let dupli = [];
    // for(let i=0; i<=arr.length; i++){
    //     if(!dupli.includes(arr[i])){
    //         dupli.push(arr[i])
    //     }
    // }
    // console.log(dupli);
    // return dupli;
    // console.log(new Set(arr))

    // return arr.filter((curr, ind) => {
    //     return arr.indexOf(curr) === ind
    // })

    // return [...new Set(arr)]

    return arr.reduce((acc, curr) => {
        return acc.includes(curr) ? acc : [...acc, curr]
    }, []);
}

removeDuplicates([1,1,2,2,3,4,4])
