/**
 * 二叉树各种遍历
 */

type NullableNode = TreeNode | null

class TreeNode {

    public lchild: NullableNode;
    public rchild: NullableNode;
    public parent: NullableNode;
    public data: any;

    constructor(parent: NullableNode, data: any, lchild: NullableNode, rchild: NullableNode) {
        this.parent = parent
        this.data = data
        this.lchild = lchild
        this.rchild = rchild
    }
}

let tree = new TreeNode(null, 'root', null, null)

function addChild(tree: TreeNode) {
    if (!tree.lchild) {
        tree.lchild = new TreeNode(tree, tree.data + ' lchild', null, null)
    }
    if (!tree.rchild) {
        tree.rchild = new TreeNode(tree, tree.data + ' rchild', null, null)
    }
}

addChild(tree)
tree.lchild && addChild(tree.lchild)
tree?.lchild?.lchild && addChild(tree.lchild.lchild)
tree?.lchild?.rchild && addChild(tree.lchild.rchild)

tree.rchild && addChild(tree.rchild)
tree?.rchild?.lchild && addChild(tree.rchild.lchild)
tree?.rchild?.rchild && addChild(tree.rchild.rchild)


function preOrder(tree: TreeNode) {
    console.log(tree.data);
    if (tree.lchild) {
        preOrder(tree.lchild)
    }
    if (tree.rchild) {
        preOrder(tree.rchild)
    }
}
console.log('---------pre order-------');

preOrder(tree)

function postOrder(tree: TreeNode) {
    if (tree.lchild) {
        postOrder(tree.lchild)
    }
    if (tree.rchild) {
        postOrder(tree.rchild)
    }
    console.log(tree.data);
}
console.log('---------post order-------');

postOrder(tree)

function inOrder(tree: TreeNode) {
    if (tree.lchild) {
        inOrder(tree.lchild)
    }
    console.log(tree.data);
    if (tree.rchild) {
        inOrder(tree.rchild)
    }
}
console.log('---------in order-------');

inOrder(tree)

function levelOrder(treeList: TreeNode[], ) {
    let queue: TreeNode[] = treeList
    let tempQueue: TreeNode[] = []
    while (queue.length) {
        for (const node of queue) {
            console.log(node.data);

            if (node.lchild) {
                tempQueue.push(node.lchild)
            }
            if (node.rchild) {
                tempQueue.push(node.rchild)
            }
        }
        queue = [...tempQueue]
        tempQueue = []
    }
}

console.log('---------level order-------');
levelOrder([tree])