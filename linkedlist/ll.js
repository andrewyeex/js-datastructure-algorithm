class LinkedList {
  constructor(head = null){
    this.head = head
    this.tail = null
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
  /**
   * Without using a counter or the known value of the list size,
   * return the node that mid point of the linked list
   * @returns {Node}
   */
  midPoint(){
    let slow = this.head
    let fast = this.head
    while (fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow;
  }
  /**
   * Checks if the list returns back to a previously visited node
   * and repeats its path over and over because its circular
   * @returns {boolean}
   */
  isCircularList(){
    let slow = this.head
    let fast = this.head
    while (fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) {
        return true
      }
    }
    return false;
  }
}


class Node {
  constructor (value = null, next = null) {
    this.value = value
    this.next  = next
  }
}

module.exports = LinkedList
