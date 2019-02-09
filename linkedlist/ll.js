class LinkedList {
  constructor() {
    this.head = null /* Node */
    this.tail = null /* Node */
    this.size = 0
  }

  /**
   * Value passed will be stored in a node and
   * the node will be added at the end of the list.
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  append (value) {
    const n = new Node(value)
    this.head ?
      this.tail.next = n :
      this.head = n
    this.tail = n
    this.size++
    return this
  }

    /**
   * Value passed will be stored in a node and
   * the node will be added at the front of the list.
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  prepend (value) {
    const n = new Node(value)
    if (this.head) {
      const oldHead = this.head
      this.head = n
      this.head.next = oldHead
    } else {
      this.head = n
      this.tail = n
    }
    this.size++
    return this
  }

  /**
   * Find a node that contains the value passed
   * and then remove that node from the list.
   *
   * @param {*} value
   * @returns {Node}
   */
  delete (value) {
    let prevNode = null
    let currentNode = this.head
    while (currentNode) {
      if (value === currentNode.value) {
        prevNode ?
          prevNode.next = currentNode.next :
          this.head = currentNode.next
        this.size--
        return currentNode
      }
      prevNode = currentNode
      currentNode = currentNode.next
    }
    return null
  }

  /**
   * Find the node that contains the value passed
   * and return
   *
   * @param {*} value
   * @returns {Node}
   */
  find (value) {
    let currentNode = this.head
    while (currentNode) {
      if (value === currentNode.value) return currentNode
      currentNode = currentNode.next
    }
    return null
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
    const arr = []
    let currentNode = this.head
    while (currentNode) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    return arr
  }

}

class Node {
  constructor (value, next = null) {
    this.value = value
    this.next = next
  }
}

module.exports = LinkedList
