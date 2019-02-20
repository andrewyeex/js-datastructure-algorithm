class Node {
  constructor(data=null){
    this.data = data
    this.right = null
    this.left = null
  }
  insert (data) {
    if (data < this.data && this.left) this.left.insert(data)
    else if (data < this.data) this.left = new Node(data)
    else if (data > this.data && this.right) this.right.insert(data)
    else if (data > this.data) this.right = new Node(data)
  }
  contains (data) {
    
  }
}

class BST {
  constructor(root = null){ this.root = root }
  /**
   * Inserts a value into the tree.
   * @param {Number} data
   * @returns {BST}
   */
  insert(data){ !this.root ? this.root = new Node(data) : this.root.insert(data) }
  /**
   * Removes a value from the tree.
   * @param {Number} value
   * @returns {Node}
   */
  remove (data) { }
  /**
   * Find a node that contains the value passed.
   * @param {Number} value
   * @returns {Node}
   */
  find (data) { }
  /**
   * Returns the MAX value from the tree.
   * @returns {Node}
   */
  max () {}
  /**
   * Returns the MIN value from the tree.
   * @returns {Node}
   */
  min () {}
  /**
   * Returns the depth (height, levels) of the tree.
   * @returns {Number}
   */
  depth () {}
  /**
   * builds an array with the values from the BST in order
   * @param {Node} node
   * @param {Array} arr
   */
  inOrder (node = this.root, arr = this.arr) {
    if (node) {
      this.inOrder(node.left, arr)
      arr.push(node.data)
      this.inOrder(node.right, arr)
    }
  }
  breadthTraverse(){
    let arr = [this.root, 'yee']
    let toPrint = []
    while (arr.length > 0) {
      const node = arr.shift()
      if(node === 'yee' && arr.length > 0){
        console.log(toPrint)
        toPrint = []
        arr.push('yee')
      }
      else if (node === 'yee' && arr.length === 0){ break }
      else {
        toPrint.push(node.data)
        if (node.left !== null) arr.push(node.left)
        if (node.right !== null) arr.push(node.right)
      }
    }
  }
}

/**
  recursive solution will validate each sub tree to make sure it meets the pre-req
  for being a BST. Validate continues to do this for each subsequent sub tree
  validation till it reaches the leaves of the tree.
 */
const validate = () => {
  if (max !== null && node.data > max) return false
  if (min !== null && node.data < min) return false
  if (node.left && !validate(node.left, min, node.data)) return false // it will first validate the left hand side
  if (node.right && !validate(node.right, node.data, max)) return false // then the right hand side
  return true // return true if all IF statements was not satisfied
}

module.exports = BST
