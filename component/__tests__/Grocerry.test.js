import { render, screen } from "@testing-library/react"
import Grocerry from "../Grocerry"
import '@testing-library/jest-dom'

test('should first', () => { 
    render(<Grocerry/>)
    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
 })
test('should first', () => { 
    render(<Grocerry/>)
    const heading = screen.getByRole('button')

    expect(heading).toBeInTheDocument()
 })