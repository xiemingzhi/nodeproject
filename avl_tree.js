class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

class AVLTree {
    constructor() {
        this.node = null 
        this.height = -1  
        this.balance = 0;         
    }            
    
    height() {
        if (this.node) { 
            return this.node.height 
        }else
            return 0 
    }

    is_leaf(){
        return (this.height == 0) 
    }

    insert(key){
        let tree = this.node
        
        let newnode = new TreeNode(key)
        
        if (tree == null) {
            this.node = newnode 
            this.node.left = new AVLTree() 
            this.node.right = new AVLTree()
            console.log("Inserted key [" + new String(key) + "]")
        }
        else if (key < tree.val) 
            this.node.left.insert(key)
            
        else if (key > tree.val) 
            this.node.right.insert(key)
        
        else 
            console.log("Key [" + new String(key) + "] already in tree.")
            
        this.rebalance() 
    }

    rebalance() {
        /* 
        Rebalance a particular (sub)tree
        https://en.wikipedia.org/wiki/AVL_tree
        A node with BalanceFactor(node)<0 is called "left-heavy", 
        one with BalanceFactor(node)>0 is called "right-heavy", 
        and one with BalanceFactor(node)=0 is sometimes simply called "balanced".
        BalanceFactor(node) = Height(RightSubtree(node)) - Height(LeftSubtree(node))
        ours
        this.balance = this.node.left.height - this.node.right.height 
        */ 
        this.update_heights(false)
        this.update_balances(false)
        while (this.balance < -1 || this.balance > 1) {
            if (this.balance > 1) {
                if (this.node.left.balance < 0) {  
                    this.node.left.lrotate() //Left Right case 
                    this.update_heights()
                    this.update_balances()
                }    
                this.rrotate() //Left Left case
                this.update_heights()
                this.update_balances()
            }    
            if (this.balance < -1) {
                if (this.node.right.balance > 0) {  
                    this.node.right.rrotate() //Right Left cse
                    this.update_heights()
                    this.update_balances()
                }    
                this.lrotate() //Right Right case
                this.update_heights()
                this.update_balances()
            }    
        }        
    }
            
    rrotate(){
        // Rotate left pivoting on self
        console.log ('Rotating ' + new String(this.node.val) + ' right') 
        /**
         *  A
         * B T
         */
        let A = this.node 
        let B = this.node.left.node 
        let T = B.right.node 
        
        /**
         *  B
         * T A
         */
        this.node = B 
        B.right.node = A 
        A.left.node = T 
    }
    
    lrotate(){
        // Rotate left pivoting on self
        console.log ('Rotating ' + new String(this.node.val) + ' left') 
        /**
         *   A
         *  T B
         */
        let A = this.node 
        let B = this.node.right.node 
        let T = B.left.node 
        
        /**
         *  B
         * A T
         */
        this.node = B 
        B.left.node = A 
        A.right.node = T 
    }    
            
    update_heights(recurse=true){
        if (this.node != null) { 
            if (recurse) { 
                if (this.node.left != null)  
                    this.node.left.update_heights()
                if (this.node.right != null)
                    this.node.right.update_heights()
            }
            this.height = Math.max(this.node.left.height,
                this.node.right.height) + 1 
        }                      
        else  
        this.height = -1 
    }

    update_balances(recurse=true){
        if (this.node != null) { 
            if (recurse) { 
                if (this.node.left != null) 
                    this.node.left.update_balances()
                if(this.node.right != null)
                    this.node.right.update_balances()
            }    
            //In a binary tree the balance factor of a node is defined to be the height difference
            this.balance = this.node.left.height - this.node.right.height 
        }    
        else 
            this.balance = 0 
    }

    delete(key){
        //# debug("Trying to delete at node: " + new String(self.node.key))
        if (this.node != null) {
            if (this.node.val == key) { 
                console.log("Deleting ... " + new String(key))  
                if (this.node.left.node == null && this.node.right.node == null)
                this.node = null //# leaves can be killed at will 
                //# if only one subtree, take that 
                else if (this.node.left.node == null) 
                    this.node = this.node.right.node
                else if (this.node.right.node == null) 
                    this.node = this.node.left.node
                
                //# worst-case: both children present. Find logical successor
                else {  
                    replacement = this.logical_successor(this.node)
                    if (replacement != null) { //# sanity check 
                        console.log("Found replacement for " + new String(key) + " -> " + new String(replacement.key))  
                        this.node.val = replacement.key 
                        
                        //# replaced. Now delete the key from right child 
                        this.node.right.delete(replacement.key)
                    }    
                }    
                this.rebalance()
                return
            }      
            else if (key < this.node.val) 
                his.node.left.delete(key)  
            else if (key > this.node.val) 
                this.node.right.delete(key)
                        
            this.rebalance()
        }    
        else {
            return 
        }    
    }

    inorder_traverse(){
        if (this.node == null)
            return [] 
        
        let inlist = [] 
        let leftList = this.node.left.inorder_traverse()
        for (let i of leftList) //use the val in the list
            inlist.push(i) 

        inlist.push(this.node.val)

        let rightList = this.node.right.inorder_traverse()
        for (let i of rightList) //use the val in the list
            inlist.push(i) 
    
        return inlist 
    }

}

a = new AVLTree()
console.log("----- Inserting -------")
//inlist = [5, 2, 12, -4, 3, 21, 19, 25]
/**
 *     3
 *  1      7
 * 0 2   5   8
 *        6   9
 */  
inlist = [7, 5, 2, 6, 3, 4, 1, 8, 9, 0]
for (let i in inlist) 
    a.insert(i)
console.log("avltree", a.inorder_traverse())