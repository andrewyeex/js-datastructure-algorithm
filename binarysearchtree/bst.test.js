const BST = require('./bst')

describe('Binary Search Tree', () => {
  describe('insert()', () => {
    test('Insert value from the tree', () => {
      const bst = new BST()
      bst.insert(3)
      bst.insert(10)
      bst.insert(1)
      bst.insert(0)
      bst.insert(30)
      bst.inOrder()
      expect(bst.arr).toEqual([0, 1, 3, 10, 30])
    })
  })
  // describe('remove()', () => {
  //   test('Remove value from the tree')
  // })
  // describe('find()', () => {
  //   test('Retrieve value from the tree')
  // })
  // describe('max()', () => {
  //   test('Retrieve Max value')
  // })
  // describe('min()', () => {
  //   test('Retrieve MIN value')
  // })
  // describe('depth()', () => {
  //   test('Retrieve the Depth of the tree')
  // })
  // describe('print()', () => {
  //   test('Depth First Traversal')
  //   test('Breadth First Traversal')
  // })
})