import { highlightTextConverter } from '@/utils'

describe('highlightTextConverter', () => {
  it('should return the correct text for "alert"', () => {
    expect(highlightTextConverter('alert')).toBe('* Meta longe de ser batida')
  })

  it('should return the correct text for "success"', () => {
    expect(highlightTextConverter('success')).toBe(
      '* Meta do mes batida! Parabéns!'
    )
  })

  it('should return the correct text for "warning"', () => {
    expect(highlightTextConverter('warning')).toBe('* Falta pouco, vamos lá!')
  })

  it('should return the correct text for ""', () => {
    expect(highlightTextConverter('')).toBe('* Sem dados no momento')
  })
})
