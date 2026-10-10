import { Card } from 'react-bootstrap';

function formatearFecha(fecha) {
    return new Date(`${fecha}T00:00:00`).toLocaleDateString('es-CL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

function SeccionNoticias({ titulo, noticias }) {
    return (
        <>
           <h3 className='h4 mb-3'>{titulo}</h3>
           {noticias.map((noticia) => (
            <Card className="mb-3 shadow-sm" key={noticia.id}>
                <Card.Body>
                    <Card.Title>{noticia.titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <time dateTime={noticia.fecha}>{formatearFecha(noticia.fecha)}</time>
                    </Card.Subtitle>
                    <Card.Text>{noticia.contenido}</Card.Text>
                </Card.Body>
            </Card>
           ))}
        </>
    );
}

export default SeccionNoticias;