import User from '../src/user'

describe('User', () => {
  test('name returns full name', () => {
    const user = new User({ firstname: 'John', lastname: 'Doe' })
    expect(user.name).toBe('John Doe')
  })
})