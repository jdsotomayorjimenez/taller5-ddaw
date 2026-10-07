import { useEffect, useState } from 'react';
import type { Contact } from '../types/contact';
import { getContacts } from '../services/contactService';
import ContactRow from './ContactRow';

function ContactList() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getContacts()
            .then((data) => setContacts(data))
            .catch(() => setError('No se pudieron cargar los contactos'))
            .finally(() => setCargando(false));
    }, []);

    if (cargando) {
        return <p className='text-muted'>Cargando contactos...</p>;
    }
    if (error) {
        return <div className='alert alert-danger'>{error}</div>;
    }

    return (
        <table className='table table-striped table-sm'>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <ContactRow key={contact.id} contact={contact} />
                ))}
            </tbody>
        </table>
    );
}

export default ContactList;
