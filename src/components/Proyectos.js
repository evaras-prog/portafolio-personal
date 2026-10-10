import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TarjetaProyecto from './TarjetaProyecto';

function Proyectos(){
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/proyectos.json`)
        .then((respuesta) => respuesta.json())
        .then((datos) => setProyectos(datos));
    }, []);

    return (
        <section id="proyectos" className="py-5">
            <Container>
                <h2 className="text-center mb-4">Proyectos</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {proyectos.map((proyecto) => (
                       <Col key={proyecto.id}>
                        <TarjetaProyecto {...proyecto} />
                       </Col>
                    ))}
                </Row>
            </Container>
        </section> 
    );
}

export default Proyectos;