import {Container, Row, Col, Image} from 'react-bootstrap';

function Introduccion({ nombre, titulo, biografia, foto, redes}) {
    return (
        <section id = "introduccion" className="intro text-white text-center">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <Image
                            src={`${process.env.PUBLIC_URL}/${foto}`}
                            alt={`Foto de ${nombre}`}
                            roundedCircle
                            className="intro-foto mb-3">
                        </Image>
                        <h1>{nombre}</h1>
                        <p className="lead">{titulo}</p>
                        <p>{biografia}</p>
                        <a className='btn btn-outline-light me-2' href={redes.github}>
                            Github
                        </a>
                        <a className='btn btn-outline-light' href={redes.linkedin}>
                            Linkedin
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Introduccion;