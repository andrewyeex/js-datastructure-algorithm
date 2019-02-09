const Queue = require('./queue')

describe('Queues', () => {
  test('enqueue', () => {
    const Q = new Queue()
    Q.enqueue('cool')
    expect(Q.size()).toEqual(1)
    expect(Q.data.toArray()).toEqual(['cool'])
  })
})
