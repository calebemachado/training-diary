import { Contact } from "../../entities/Contact"; 
export interface ContactRepository { 
    createContact(contact: Contact): Promise<boolean>;
    getContacts(): Promise<Contact[]>; 
}