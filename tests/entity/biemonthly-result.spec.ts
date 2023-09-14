import { BiemonthlyResult } from '../../src/entity/biemonthly-result'
import { InvalidParams } from '../../src/expections/invalid-param'
import { type BiemonthlyResultInput } from '../../src/protocols/biemonthly-result-input'

describe('BiemonthlyResult Entity', () => {
  test("1. should throw an error if the bimester input isn't right", () => {
    // System under test
    const sut = new BiemonthlyResult()
    const input: BiemonthlyResultInput = {
      bimester: 'QUINTO',
      discipline: 'Geografia',
      grade: 0
    }

    expect(() => { sut.create(input) }).toThrow(new InvalidParams("Bimester must be one of following: 'PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO'"))
  })

  test("2. should throw an error if the discipline input isn't right", () => {
    // System under test
    const sut = new BiemonthlyResult()
    const input: BiemonthlyResultInput = {
      bimester: 'PRIMEIRO',
      discipline: 'Climatologia',
      grade: 10
    }

    expect(() => { sut.create(input) }).toThrow(new InvalidParams("Discipline must be one of following: 'Biologia', 'Artes', 'Geografia', 'Sociologia'"))
  })

  test("2. should throw an error if the discipline input isn't right", () => {
    // System under test
    const sut = new BiemonthlyResult()
    const input: BiemonthlyResultInput = {
      bimester: 'PRIMEIRO',
      discipline: 'Geografia',
      grade: 15
    }

    expect(() => { sut.create(input) }).toThrow(new InvalidParams('Grade value must be between 0 and 10'))
  })
})
