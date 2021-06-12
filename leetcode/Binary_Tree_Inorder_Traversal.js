var inorderTraversal = function(node, results = []) {  
    if(node) {
        inorderTraversal(node.left, results);            
        results.push(node.val);
        inorderTraversal(node.right, results);            
    }
    console.log(results);
    return results;
};

inorderTraversal([1,null,2,3]);
