class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }
  /**
   * Adds a value at the TAIL of the Queue
   *
   * @param {*} value
   * @returns {Queue}
   */
  enqueue (value) { }
  /**
   * Removes a value at the HEAD of the Queue <--->
   *
   * @param {*} value
   * @returns {Queue}
   */
  dequeue (value) { }
  /**
   * Reads the value at the HEAD of the Queue <--->
   *
   * @returns {*}
   */
  peek () { }
  /**
   * Returns the values inside the queue in an Array
   *
   * @returns {Array}
   */
  toArray () {}
}

module.exports = Queue
