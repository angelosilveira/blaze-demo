import { render, screen } from '@testing-library/react'

import Controller from '.'

describe('<Controller />', () => {
  it('should render the heading', () => {
    const { container } = render(<Controller />)

    expect(screen.getByRole('heading', { name: /Controller/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
