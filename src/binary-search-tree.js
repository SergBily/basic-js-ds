const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
	constructor(data) {
	  this.data = data;
	  this.left = null;
	  this.right = null;
	}
 }
class BinarySearchTree {
	constructor() {
		this.rootTree = null;
	}

	root() {
		return this.rootTree;
	}
 
	add(data) {
		this.rootTree = addInTree(this.rootTree, data);

		function addInTree(node, date) {
			if (!node) {
				return new Node(date);
			};

			if (node.date === date) {
				return node;
			}

			if (date > node.data) {
				node.right = addInTree(node.right, data)
			} else {
				node. left = addInTree(node.left, data)
			}
			return node
		}
	}
 
	has(data) {
		return hasDate(this.rootTree, data);

		function hasDate(node, data) {
			if (!node) {
				return false;
			}

			if (node.data === data) {
				return true;
			}
			
			if (data > node.data) {
				return hasDate(node.right, data);
			} else {
				return hasDate(node.left, data);
			}
		}
	}
 
	find(data) {
		return findNode(this.rootTree, data) 
			
			function findNode(node, data) {
				
				if (!node) {
					return null;
				}

				if (data === node.data) {
					return node;
				}

				if (data > node.data) {
					return findNode(node.right, data);

				} else {
					return findNode(node.left, data);
				}
		}
	}
 
	remove(data) {
		this.rootTree = removeNode(this.rootTree, data);
		console.log(this.rootTree);

		function removeNode(node, data) {
			if (!node) {
				return null;
			};

			if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			} else if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else {

				if (!node.left && !node.right) {
					return null;
				};

				if (!node.left) {
					node = node.right;
					return node;
				} else if (!node.right) {
					node = node.left;
					return node;
				}

				let searhMaxLeft = node.left;
				while (searhMaxLeft.right) {
					searhMaxLeft = searhMaxLeft.right
				}
				node.data = searhMaxLeft.data;
				node.left = removeNode(node.left, searhMaxLeft.data);
				return node;

			}
		}
	  
	}
 
	min() {
		if (!this.rootTree) return;

		let nodeMin = this.rootTree;
		while (nodeMin.left) {
			nodeMin = nodeMin.left;
		}
		return nodeMin.data
	}
 
	max() {
		if (!this.rootTree) return;

		let nodeMin = this.rootTree;
		while (nodeMin.right) {
			nodeMin =nodeMin.right;
		}
		return nodeMin.data
	  
	}
}

module.exports = {
  BinarySearchTree
};