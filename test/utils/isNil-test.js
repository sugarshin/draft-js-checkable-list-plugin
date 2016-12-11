import isNil from '../../src/utils/isNil'

describe('isNil', () => {
  it('null', () => {
    expect(isNil(null)).toBe(true)
  })
  it('undefined', () => {
    expect(isNil(undefined)).toBe(true)
  })
  it('0', () => {
    expect(isNil(0)).toBe(false)
  })
  it('Empty string', () => {
    expect(isNil('')).toBe(false)
  })
  it('false', () => {
    expect(isNil(false)).toBe(false)
  })
})
