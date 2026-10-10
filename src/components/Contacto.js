import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });
  const [estado, setEstado] = useState(null);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const correoValido = /\S+@\S+\.\S+/.test(formulario.correo);

    if (!formulario.nombre.trim() || !correoValido || !formulario.mensaje.trim()) {
      setEstado('error');
      return;
    }

    setEstado('exito');
    setFormulario({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contacto</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            {estado === 'exito' && (
              <Alert variant="success">¡Gracias! Tu mensaje fue enviado.</Alert>
            )}
            {estado === 'error' && (
              <Alert variant="danger">
                Completa todos los campos con un correo válido.
              </Alert>
            )}
            <Form onSubmit={manejarEnvio} noValidate>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="correo">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  name="correo"
                  value={formulario.correo}
                  onChange={manejarCambio}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacto;