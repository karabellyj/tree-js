/**
 * @fileOverview Implementation of a binary tree data structure
 * @author Jozef Karabelly (xkarab03)
 * @module tree
 */

"use strict";

/**
 * Representation of a binary tree node. A binary tree consists of one or more
 * nodes. When constructed, the key of the new node is set to a value while
 * the left and the right children are set to null.
 * 
 * @constructor
 * @param {Object|string|number} value the value to be set as a the key of the 
 *        node
 */
function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

/**
 * Creates a new binary tree instance.
 * 
 * @constructor
 * @param {function} cmp the function used as a comparator to determine
 *        the relative ordering for the nodes of the binary tree  
 */
export function Tree(cmp) {
    this.cmp = cmp;
    this.root = null;
}


/**
 * Adds a node to the binary tree containing 'value'
 * 
 * @param {Object|string|number} value the value to be added to the binary tree
 */
Tree.prototype.insertValue = function(value) {
    let newNode = new Node(value);
    this.root && insertNode(this.root, newNode, this.cmp);
    this.root = this.root || newNode;
}


/**
 * Traverses the binary tree pre-order. Meaning, the 'node' is visited before any
 * of its children.
 * 
 * @generator
 * @param {Node} [node=this.root] the node from which the traversal starts
 * @yields {Object|string|number} the next 'value' in pre-order traversal 
 */
Tree.prototype.preorder = function*(node = this.root) {
    yield node.value;
    node.left && (yield* this.preorder(node.left));
    node.right && (yield* this.preorder(node.right));
}


/**
 * Traverses tge binary tree in-order. Meaning, the nodes in the tree are
 * visited in the order specified by the comparator function.
 * 
 * @generator
 * @param {Node} [node=this.root] the node from which the traversal starts
 * @yields {Object|string|number} the next 'value' in in-order traversal
 */
Tree.prototype.inorder = function*(node = this.root) {
    node.left && (yield* this.inorder(node.left));
    yield node.value;
    node.right && (yield* this.inorder(node.right));
}

/**
 * Traverses the binary tree post-order. Meaning, the 'node' is visited after
 * all of its children have been visited.
 * 
 * @generator
 * @param {Node} [node=this.root] the node from which the traversal starts
 * @yields {Object|string|number} the next 'value' in post-order traversal
 */
Tree.prototype.postorder = function*(node = this.root) {
    node.left && (yield* this.postorder(node.left));
    node.right && (yield* this.postorder(node.right));
    yield node.value;
}


/********** helper functions **********/

/**
 * Recursive helper function to insert a node to the binary tree
 * 
 * @param {Node} node the node from which to start the path to determine where
 *        to add the new node
 * @param {Node} newNode the new node to be added
 * @param {function} cmp the comparator function to determine the relative ordering
 */
function insertNode(node, newNode, cmp) {
    if (cmp(newNode.value, node.value)) {
        node.left && insertNode(node.left, newNode, cmp);
        node.left = node.left || newNode;
    } else {
        node.right && insertNode(node.right, newNode, cmp);
        node.right = node.right || newNode;
    }
}