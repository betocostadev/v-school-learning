// SNAPSHOTS
// The Snapshot is a representation of date in string format

const user = {
  name: 'Cornelius Faux',
  age: 69,
  job: 'inventor'
}

// The snapshot of the user would be something like: user = {\"name\": \"Cornelius Faux\", ...}

test('without snapshots', () => {
  // Let's add the string version of the user Object
  const userString = "{\"name\":\"Cornelius Faux\",\"age\":69,\"job\":\"inventor\"}"

  // and compare it accordingly
  expect(JSON.stringify(user)).toBe(userString)
})

test('user matches with snapshot', () => {
  expect(user).toMatchSnapshot()
})