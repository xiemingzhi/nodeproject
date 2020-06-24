/**
 * Definition for a binary tree node.
 * 
 1
  \
   2
  /
 3
 TreeNode {
  val: 1,
  left: null,
  right:
   TreeNode {
     val: 2,
     left: TreeNode { val: 3, left: null, right: null },
     right: null } }
 */
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(rootNode) {
    console.log(rootNode)  
    currNode = rootNode
    retArr = []
    stack = []
    while (currNode != null || stack.length > 0) {
        while (currNode != null) {
            stack.push(currNode)
            currNode = currNode.left
        }
        //remove null
        lastNode = stack.pop()
        //get the value
        retArr.push(lastNode.val)
        currNode = lastNode.right
    }
    return retArr
};

input = [1,null,2,3] //[1,3,2]
//[5,4,7,3,null,2,null,-1,null,9] //[-1,3,4,5,9,2,7]
//[5,1,4,null,null,3,6] //[1,5,3,4,6]
left = new TreeNode(3, null, null)
right = new TreeNode(2, left, null)
rootNode = new TreeNode(1, null, right)
//console.log(rootNode)
console.log(inorderTraversal(rootNode))
