import type { Contact } from '../types/contact';
import { Link } from 'react-router';

type ContactRowProps = {
    contact: Contact;
};

function ContactRow({ contact }: ContactRowProps) {
    return (
        <tr>
            <td>{contact.id}</td>
            <td>
                <Link to={`/contactos/${contact.id}`}>
                    {contact.name}
                </Link>
            </td>
            <td>{contact.email}</td>
        </tr>
    );
}

export default ContactRow;