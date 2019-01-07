function BinarySearchTree() {

    var Node = function(key) {
        this.key = key;
        this.left = left;
        this.right = right;
    };

    var root = null;

    // 向树中插入一个新的键
    this.insert = function(key) {

        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    var insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    // 中序遍历
    // 是一种以上行顺序访问BST所有节点的遍历方式，也就是从最小到最大的访问顺序访问所有节点
    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback);
    };

    var inOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    // 先序遍历
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    };

    var preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    // 后序遍历
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    };

    var postOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    // 返回树中最小的值/键
    this.min = function() {
        return minNode(root);
    };

    var minNode = function(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }

            return node.key;
        }
        return null;
    };

    // 返回树中最大的值/键
    this.max = function() {
        return maxNode(root);
    };

    var maxNode = function(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }

            return node.key;
        }
        return null;
    };

    // 在树中查找一个键，如果节点存在，则返回 true ；如果不存在，则返回 false
    this.search = function(key) {
        return searchNode(root, key);
    };

    var searchNode = function(node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

    // 移除某一个键
    this.remove = function(key) {
        root = removeNode(root, key)
    }

    var removeNode = function(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };

    var findMinNode = function(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };
}