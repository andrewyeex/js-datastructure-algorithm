const DoublyLinkedList = require('../doublylinkedlist/dll')
/**
 * Secretly disguised as a Queue but really a LinkedList
 */
class Queue {
  constructor () {
    this.data = new DoublyLinkedList()
  }
  size () { return this.data.size }
  /**
   * Adds a value at the TAIL of the Queue : O(1)
   *
   * @param {*} value
   * @returns {Queue}
   */
  enqueue (value) { this.data.append(value) }
  /**
   * Removes a value at the HEAD of the Queue : O(1)
   *
   * @param {*} value
   * @returns {Queue}
   */
  dequeue (value) { this.data.deleteTail() }
  /**
   * Reads the value at the HEAD of the Queue : O(1)
   *
   * @returns {*}
   */
  peek () { return this.data.tail }
  /**
   * Returns the values inside the queue in an Array : O(n)
   *
   * @returns {Array}
   */
  toArray () { this.data.toArray() }
}

module.exports = Queue
