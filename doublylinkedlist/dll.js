class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }
  /**
   * Adds a value at the end of the list : O(1)
   *
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  append (value) {
    const n = new Node(value)
    if (!this.head) {
      this.head = n
      this.head.next = this.tail
    } else {
      this.tail.next = n
      n.prev = this.tail
      this.tail = n
    }
    this.size++
    return this
  }
  /**
   * Adds a value at the beginning of the list : O(1)
   *
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  prepend (value) {
    const n = new Node(value)
    if (!this.head) {
      this.head = n
      this.tail = n
      this.head.next = this.tail
      this.tail.prev = this.head
    } else {
      n.next = this.head
      this.head = n
    }
    this.size++
    return this
  }
  /**
   * Delete a given value from the list : O(n)
   *
   * @param {*} value
   * @returns {Node}
   */
  delete (value) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        if (!currentNode.prev) this.deleteHead()
        else if (!currentNode.next) this.deleteTail()
        else {
          let prev = currentNode.prev
          let next = currentNode.next
          prev.next = next
          next.prev = prev
          this.size--
        }
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }
  /**
   * Delete the tail of a list : O(1)
   *
   * @returns {Node}
   */
  deleteTail () {
    let oldTail = this.tail
    this.tail = this.tail.prev
    this.tail.next = null
    this.size--
    return oldTail
  }
  /**
   * Delete the head of a list : O(1)
   *
   * @returns {Node}
   */
  deleteHead () {
    let oldHead = this.head
    this.head = this.head.next
    this.head.prev = null
    this.size--
    return oldHead
  }
  /**
   * Find a value from a list : O(n)
   *
   * @param {*} value
   * @returns {Node}
   */
  find (value) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) return currentNode
      currentNode = currentNode.next
    }
    return null
  }
  /**
   * Turn the values of the list into an array : O(n)
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
  constructor(
    value = null,
    next = null,
    prev = null
  ){
    this.value = value
    this.next = next
    this.prev = prev
  }
}

module.exports = DoublyLinkedList
