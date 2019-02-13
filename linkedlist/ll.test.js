const LinkedList = require('./ll')

describe('Singly Linked List', () => {
  let ll = null
  beforeEach(() => {
    ll = new LinkedList()
    ll.append(10)
    ll.append('10')
    ll.append('ten')
  })
  test('append', () => {
    expect(ll.head.value).toEqual(10)
    expect(ll.tail.value).toEqual('ten')
    expect(ll.size).toEqual(3)
  })
  test('prepend', () => {
    ll.prepend(20)
    expect(ll.head.value).toEqual(20)
    expect(ll.tail.value).toEqual('ten')
    expect(ll.size).toEqual(4)

  })
  test('delete', () => {
    ll.prepend(20)
    ll.delete(20)
    expect(ll.head.value).toEqual(10)
    expect(ll.tail.value).toEqual('ten')
    expect(ll.size).toEqual(3)
  })
  test('toArray', () => {
    ll.prepend(20)
    expect(ll.toArray()).toEqual([20,10,'10','ten'])
  })
  test('midPoint', () => {
    expect(ll.midPoint().value).toEqual('10')
    ll.prepend(20)
    ll.prepend(50)
    expect(ll.midPoint().value).toEqual(10)
  })
})