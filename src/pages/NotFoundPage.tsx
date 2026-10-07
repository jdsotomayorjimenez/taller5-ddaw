import { Link } from 'react-router';

function NotFoundPage() {
    return (
        <div className='text-center py-5'>
            <h2>404 · No encontrada</h2>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default NotFoundPage;