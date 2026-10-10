import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import SeccionNoticias from "./SeccionNoticias";

function Noticias() {
    const [noticias, setNoticias] = useState({ tecnologia: [], carrera: []});

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/noticias.json`)
         .then((respuesta) => respuesta.json())
         .then((datos) => setNoticias(datos));
    }, []);

    return (
    <section id="noticias" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Noticias</h2>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <SeccionNoticias titulo="Tecnología" noticias={noticias.tecnologia} />
          </Col>
          <Col>
            <SeccionNoticias titulo="Mi carrera" noticias={noticias.carrera} />
          </Col>
        </Row>
      </Container>
    </section>        
    );
}

export default Noticias;