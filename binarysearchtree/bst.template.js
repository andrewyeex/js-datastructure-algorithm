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
  }
  /**
   * Inserts a value into the tree.
   * @param {Number} value
   * @returns {BST}
   */
  insert (value) { }
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
   * Returns the MAX value of the tree.
   * @returns {Node}
   */
  max () {}
  /**
   * Returns the MIN value of the tree.
   * @returns {Node}
   */
  min () {}
  /**
   * Returns the depth (height, levels) of the tree.
   * @returns {Number}
   */
  depth () {}
  /**
   * Console logs the tree based users option of
   * breadth vs depth first traversal, default is breadth
   * @param {String} option
   */
  print (option = 'breadth') {}
}

module.exports = BST
