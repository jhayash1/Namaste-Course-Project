import { sum } from "../sum"

test('sum',()=>{
    const result = sum(4,6)
    expect(result).toBe(10)
})