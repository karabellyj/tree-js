"use strict";

function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

export function Tree(cmp) {
    this.cmp = cmp;
    this.root = null;
}

Tree.prototype.insertValue = function(value) {
    let newNode = new Node(value);
    this.root && insertNode(this.root, newNode, this.cmp);
    this.root = this.root || newNode;
}

Tree.prototype.preorder = function*(node = this.root) {
    yield node.value;
    node.left && (yield* this.preorder(node.left));
    node.right && (yield* this.preorder(node.right));
}

Tree.prototype.inorder = function*(node = this.root) {
    node.left && (yield* this.inorder(node.left));
    yield node.value;
    node.right && (yield* this.inorder(node.right));
}

Tree.prototype.postorder = function*(node = this.root) {
    node.left && (yield* this.postorder(node.left));
    node.right && (yield* this.postorder(node.right));
    yield node.value;
}

function insertNode(node, newNode, cmp) {
    if (cmp(newNode.value, node.value)) {
        node.left && insertNode(node.left, newNode, cmp);
        node.left = node.left || newNode;
    } else {
        node.right && insertNode(node.right, newNode, cmp);
        node.right = node.right || newNode;
    }
}