class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }
  /**
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  append (value) { }
  /**
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  prepend (value) { }
  /**
   * @param {*} value
   * @returns {Node}
   */
  delete (value) { }
  /**
   * @returns {Node}
   */
  deleteTail () { }
  /**
   * @returns {Node}
   */
  deleteHead () { }
  /**
   * @param {*} value
   * @returns {Node}
   */
  find (value) { }
  /**
   * @returns {Array}
   */
  toArray () { }
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