import { render } from '@testing-library/react'
import BadgeStack from '.'

describe('BadgeStack Component', () => {
  test('renders BadgeStack with default props', () => {
    const { getByText } = render(<BadgeStack title="Test Title" />)
    expect(getByText('Test Title')).toBeInTheDocument()
  })

  test('renders BadgeStack with small size', () => {
    const { getByText } = render(<BadgeStack title="Test Title" size="sm" />)
    const badge = getByText('Test Title')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('text-sm')
  })
})
