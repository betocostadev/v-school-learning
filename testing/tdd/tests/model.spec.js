import Model from '../src/model'

test('new works', () => {
  expect(new Model).toBeInstanceOf(Model)
})

test('model structure', () => {
  expect(new Model).toEqual(expect.objectContaining({
    $collection: expect.any(Array),
    record: expect.any(Function),
    all: expect.any(Function),
    find: expect.any(Function),
    update: expect.any(Function),
  }))
})

describe('record', () => {
  const heroes = [{name: 'Batman', name: 'Aquaman'}]

  test('can add data to collection', () => {
    const model = new Model()
    model.record(heroes)
    expect(model.$collection).toEqual(heroes)
  })

  test('gets called when data is passed to model', () => {
    // We need to check if the record method was called - great use case for a spy
    const spy = jest.spyOn(Model.prototype, 'record')
    const model = new Model(heroes)
    expect(spy).toHaveBeenCalled()
    expect(model.$collection).toEqual(heroes)
    // Remove the spy
    spy.mockRestore()
  })
})