import movies from '../src/movies'

describe('Favorite Movies', () => {
  let myMovies = []
  beforeEach(() => {
    myMovies = [
      {
        title: 'Age of Ultron',
        rate: null
      },
      {
        title: 'Gladiator',
        rate: 5
      }
    ]
  })

  test('can add a movie', () => {
    movies.add(myMovies, 'Kung Fury')
    expect(myMovies).toMatchSnapshot()
  })

  // To test only once:
  // test.only('can add a movie', () => {
  //   movies.add(myMovies, 'Kung Fury')
  //   expect(myMovies).toMatchSnapshot()
  // })
  // You can also use test.skip() to skip a test

  test('rate a movie', () => {
    movies.rate(myMovies[0], 3)
    expect(myMovies).toMatchSnapshot()
  })
})