import { Button } from "./Button"
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Button Component', () => {
    it('renderiza el botón Number correctamente', () => {
      render(<Button value="7" clase="number" />)
      const button = screen.getByText('7')
      expect(button).toHaveClass('number')
    })
  
    it('renderiza el botón wide correctamente', () => {
      render(<Button value="0" clase="number" isWide />)
      const button = screen.getByText('0')
      expect(button).toHaveClass('wide')
    })
})