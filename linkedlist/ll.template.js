class LinkedList {
  constructor() {
    this.head = null /* Node */
    this.tail = null /* Node */
    this.size++
  }

  /**
   * Value passed will be stored in a node and
   * the node will be added at the end of the list.
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  append (value) {

  }

    /**
   * Value passed will be stored in a node and
   * the node will be added at the front of the list.
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  prepend (value) {

  }

  /**
   * Find a node that contains the value passed
   * and then remove that node from the list.
   *
   * @param {*} value
   * @returns {Node}
   */
  delete (value) {

  }

  /**
   * Find the node that contains the value passed
   * and return
   *
   * @param {*} value
   * @returns {Node}
   */
  find (value) {

  }

  /**
   * Console.log the values of each node on the list in
   * the order the appear from head to tail or tail to head.
   *
   * @param {boolean} isReverse
   */
  print (isReverse = false) {
    // need to visualized reverse print to see it
  }

  /**
   * Returns an array with the values of each node in the list
   * in the order they appear on the list
   *
   * @returns {Array}
   */
  toArray () {

  }

}

/**
 * Node Class used for implementing a Linked List
 */
class Node {
  constructor (value, next = null) {
    this.value = value
    this.next = next
  }
}

module.exports = LinkedList
