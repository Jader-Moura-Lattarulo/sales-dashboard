import { jwtExpirationDateConverter } from '@/utils'

describe('jwtExpirationDateConverter', () => {
  const realDateNow = Date.now.bind(global.Date)

  beforeAll(() => {
    global.Date.now = jest.fn(() =>
      new Date('2025-03-19T00:00:00.000Z').getTime()
    )
  })

  afterAll(() => {
    global.Date.now = realDateNow
  })

  it('should return zero when expiration is at the same time', () => {
    const exp = Math.floor(Date.now() / 1000)
    const result = jwtExpirationDateConverter(exp)

    expect(result).toBe(0)
  })

  it('should convert future expiration date to 5 days in the future', () => {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5
    const result = jwtExpirationDateConverter(exp)

    expect(result).toBe(5)
  })

  it('shold correctly convert expiration date in a fraction of a day (12 hours in the future)', () => {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 12
    const result = jwtExpirationDateConverter(exp)

    expect(result).toBe(0.5)
  })
})
