class Node {
  constructor (value = null, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BST {
  constructor(head = null){
    this.head = head
    this.arr = []
  }
  /**
   * Inserts a value into the tree.
   * @param {Number} value
   * @returns {BST}
   */
  insert (value) {
    const n = new Node(value)
    if (!this.head) this.head = n
    else {
      let current = this.head
      while (current) {
        if (value < current.value) {
          if (!current.left){
            current.left = n
            break
          }
          current = current.left
        }
        else if (value > current.value) {
          if (!current.right){
            current.right = n
            break
          }
          current = current.right
        }
        else {
          break // the value already exist in the tree
        }
      }
    }
    return this
  }
  /**
   * Removes a value from the tree.
   * @param {Number} value
   * @returns {Node}
   */
  remove (value) { }
  /**
   * Find a node that contains the value passed.
   * @param {Number} value
   * @returns {Node}
   */
  find (value) { }
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
  inOrder (node = this.head, arr = this.arr) {
    if (node) {
      this.inOrder(node.left, arr)
      arr.push(node.value)
      this.inOrder(node.right, arr)
    }
  }
}

module.exports = BST
