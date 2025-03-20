import { pxToRem } from '@/utils'

describe('Convert Pixels to REM', () => {
  it('should return zero when try to convert 0px to rem', () => {
    expect(pxToRem(0)).toBe('0rem')
  })

  it('should correctly convert pixels to rem for positive values', () => {
    expect(pxToRem(8)).toBe('0.5rem')
    expect(pxToRem(16)).toBe('1rem')
    expect(pxToRem(32)).toBe('2rem')
  })

  it('should correctly convert pixels to rem for negative values', () => {
    expect(pxToRem(-8)).toBe('-0.5rem')
    expect(pxToRem(-16)).toBe('-1rem')
    expect(pxToRem(-32)).toBe('-2rem')
  })
})
