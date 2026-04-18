import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renderiza enlaces de la vista principal', () => {
    render(<Footer />)

    expect(screen.getByText(/todos los derechos reservados/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /proyectos/i })).toBeInTheDocument()
  })

  it('renderiza enlaces minimos cuando minimal es true', () => {
    render(<Footer minimal />)

    expect(screen.getByRole('link', { name: /maka ows/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contacto/i })).toBeInTheDocument()
  })
})
