import type { Contact } from '../types/contact';

type ContactRowProps = {
    contact: Contact;
};

function ContactRow({ contact }: ContactRowProps) {
    return (
        <tr>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
        </tr>
    );
}

export default ContactRow;