import { Card, Badge, Button } from 'react-bootstrap';

function TarjetaProyecto({ titulo, descripcion, tecnologias, imagen, enlace }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL}/${imagen}`}
        alt={`Imagen del proyecto ${titulo}`}
        className="tarjeta-imagen"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <div className="mb-3">
          {tecnologias.map((tec) => (
            <Badge bg="secondary" className="me-1" key={tec}>
              {tec}
            </Badge>
          ))}
        </div>
        <Button
          variant="primary"
          href={enlace}
          target="_blank"
          rel="noreferrer"
          className="mt-auto"
        >
          Ver proyecto
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TarjetaProyecto;