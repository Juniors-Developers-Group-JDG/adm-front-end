import { render } from '@testing-library/react'
import BadgeStatus from '.'

test('renders BadgeStatus with correct title and className', () => {
  const { getByText } = render(<BadgeStatus variant="green" />)
  const badgeElement = getByText(/Ativa/i)

  expect(badgeElement).toBeInTheDocument()
  expect(badgeElement).toHaveClass('bg-secondary-900')
})
