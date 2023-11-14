import { render } from '@testing-library/react'
import Home from './page'

describe('Initial test', () => {
  test('renders Hello text with red color', () => {
    const { getByText } = render(<Home />)
    const helloElement = getByText(/Hello/i)

    expect(helloElement).toBeInTheDocument()
    expect(helloElement).toHaveClass('text-red-500')
  })
})
