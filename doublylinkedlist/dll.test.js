const DoublyLinkedList = require('./dll')

describe('Doubly Linked List', () => {
  test('append', () => {
    const dll = new DoublyLinkedList()
    dll.append(10)
    dll.append('10')
    dll.append('ten')
    expect(dll.head.value).toEqual(10)
    expect(dll.tail.value).toEqual('ten')
    expect(dll.size).toEqual(3)
  })
  test('prepend', () => {
    const dll = new DoublyLinkedList()
    dll.append(10)
    dll.append('10')
    dll.append('ten')
    dll.prepend(20)
    expect(dll.head.value).toEqual(20)
    expect(dll.tail.value).toEqual('ten')
    expect(dll.size).toEqual(4)

  })
  test('delete head', () => {
    const dll = new DoublyLinkedList()
    dll.append(10)
    dll.append('10')
    dll.append('ten')
    dll.prepend(20)
    dll.delete(20)
    expect(dll.head.value).toEqual(10)
    expect(dll.tail.value).toEqual('ten')
    expect(dll.size).toEqual(3)
  })
  test('delete tail', () => {
    const dll = new DoublyLinkedList()
    dll.append(10)
    dll.append('10')
    dll.append('ten')
    dll.prepend(20)
    dll.delete('ten')
    expect(dll.head.value).toEqual(20)
    expect(dll.tail.value).toEqual('10')
    expect(dll.size).toEqual(3)
  })
  test('delete somewhere in between', () => {
    const dll = new DoublyLinkedList()
    dll.append(10)
    dll.append('10')
    dll.append('ten')
    dll.prepend(20)
    dll.delete('10')
    expect(dll.head.value).toEqual(20)
    expect(dll.tail.value).toEqual('ten')
    expect(dll.size).toEqual(3)
  })
  test('Find a known value', () => {
    const dll = new DoublyLinkedList()
    dll.append(10)
    dll.append('10')
    dll.append('ten')
    dll.prepend(20)
    dll.delete('10')
    expect(dll.find(10).value).toEqual(10)
  })
  test('Find a unknown value', () => {
    const dll = new DoublyLinkedList()
    dll.append(10)
    dll.append('10')
    dll.append('ten')
    dll.prepend(20)
    dll.delete('10')
    expect(dll.find(0)).toEqual(null)
  })
  test('toArray', () => {
    const dll = new DoublyLinkedList()
    dll.append(10)
    dll.append('10')
    dll.append('ten')
    dll.prepend(20)
    expect(dll.toArray()).toEqual([20,10,'10','ten'])
  })
})