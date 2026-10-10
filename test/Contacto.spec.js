import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Contacto from '../src/components/Contacto';

describe('Contacto', () => {
  afterEach(() => cleanup());

  it('renderiza los tres campos y el boton', () => {
    render(<Contacto />);
    expect(screen.getByLabelText('Nombre')).toBeTruthy();
    expect(screen.getByLabelText('Correo')).toBeTruthy();
    expect(screen.getByLabelText('Mensaje')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeTruthy();
  });

  it('muestra error si se envia vacio', () => {
    render(<Contacto />);
    fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));
    expect(screen.getByText(/Completa todos los campos/)).toBeTruthy();
  });

  it('muestra exito con datos validos', () => {
    render(<Contacto />);
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { name: 'nombre', value: 'Ana' } });
    fireEvent.change(screen.getByLabelText('Correo'), { target: { name: 'correo', value: 'ana@correo.cl' } });
    fireEvent.change(screen.getByLabelText('Mensaje'), { target: { name: 'mensaje', value: 'Hola' } });
    fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));
    expect(screen.getByText(/Gracias/)).toBeTruthy();
  });
});