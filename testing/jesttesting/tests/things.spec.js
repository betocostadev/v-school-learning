// Testing some different data types

describe('Different data like Arrays', () => {
  test('string comparison', () => {
    expect('the String').toBe('the String')
  })
  test('array comparison', () => {
    expect([13]).toEqual([13])
  })
  test('object comparison', () => {
    expect({name: 'Beto'}).toEqual({name: 'Beto'})
  })

  test('more complex data', () => {
    const now = {
      time: Date.now()
    }

    expect(now).toEqual({time: expect.any(Number)})

  })
})