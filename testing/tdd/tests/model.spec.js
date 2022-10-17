import Model from '../src/model'

function createModel(data = [], options = {}) {
  return new Model({
    ...options,
    data
  })
}

test('new works', () => {
  expect(createModel()).toBeInstanceOf(Model)
})

test('model structure', () => {
  expect(createModel()).toEqual(expect.objectContaining({
    $collection: expect.any(Array),
    $options: expect.objectContaining({
      primaryKey: 'id'
    }),
    record: expect.any(Function),
    all: expect.any(Function),
    find: expect.any(Function),
    update: expect.any(Function),
  }))
})

// using .only will run only tests in this block
// describe.only('customizations', () => {
describe('customizations', () => {
  test('customize the primaryKey', () => {
    const model = createModel([], {
      primaryKey: 'name'
    })

    expect(model.$options.primaryKey).toBe('name')
  })
})

describe('record', () => {
  const heroes = [{ id: 1, name: 'Batman' }, { name: 'Aquaman' }]

  test('can add data to collection', () => {
    const model = createModel()
    model.record(heroes)
    expect(model.$collection).toEqual([
      heroes[0],
      {
        id: expect.any(Number),
        name: heroes[1].name
      }
    ])
  })

  test('gets called when data is passed to model', () => {
    // We need to check if the record method was called - great use case for a spy
    const spy = jest.spyOn(Model.prototype, 'record')
    const model = createModel(heroes)
    expect(spy).toHaveBeenCalled()
    expect(model.$collection).toEqual(heroes)
    // Remove the spy
    spy.mockRestore()
  })
})

describe('all', () => {
  const villains = [{name: 'Joker'}, {name: 'Penguim'}]

  test('returns empty model', () => {
    const model = createModel()
    expect(model.all()).toEqual([])
  })

  test('returns model data', () => {
    const model = createModel(villains)
    expect(model.all()).toEqual(villains)
    expect(model.all().length).toBe(2)
  })

  test('original data stays intact', () => {
    const model = createModel([{ name: 'Batman'}])
    const data = model.all()
    data[0].name = 'Joker'

    expect(model.$collection[0].name).toBe('Batman')
  })
})

describe('find', () => {
  const vikings = [{ id: 1, name: 'Ragnar' }, { id: 2, name: 'Bjorn' }]
  
  test('returns null if nothing matches', () => {
    const model = createModel()
    expect(model.find('Batman')).toEqual(null)
  })

  test('find returns a matching entry', () => {
    const model = createModel(vikings)
    expect(model.find(1)).toEqual(vikings[0])
  })
})

describe('update', () => {
  const heroesAndVillains = [{ id: 1, name: 'Batman'}]
  let model

  beforeEach(() => {
    // Using the dataset converting to string and back to avoid that the updated values get in the test.
    const dataset = JSON.parse(JSON.stringify(heroesAndVillains))
    model = createModel(dataset)
  })

  test('an entry by id', () => {
    model.update(1, { name: 'Joker'})
    expect(model.find(1).name).toBe('Joker')
  })

  test('extend an entry by id', () => {
    model.update(1, { cape: true })
    expect(model.find(1)).toEqual(
      expect.objectContaining({
        name: 'Batman',
        cape: true
      })
    )
  })

  test('return false if no entry matches', () => {
    expect(model.update(2, { name: 'Joker'})).toBe(false)
  })
})