import type { Contact, ContactDetail } from '../types/contact';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function getContacts(): Promise<Contact[]> {
    const res = await fetch(API_URL);
    if (!res.ok) {
        throw new Error(`Error HTTP ${res.status}`);
    }
    return res.json();
}

export async function getContact(id:string): Promise<ContactDetail> {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) {
        throw new Error(`Error HTTP ${res.status}`);
    }
    return res.json();
}