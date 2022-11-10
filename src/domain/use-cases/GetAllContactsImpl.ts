import { Contact } from "../entities/Contact";
import { ContactRepository } from "../interfaces/repositories/IContact.repository";
import { GetAllContactsUseCase } from "../interfaces/use-cases/IGetAllContacts.usecase";

export class GetAllContacts implements GetAllContactsUseCase {
    contactRepository: ContactRepository
    
    constructor(contactRepository: ContactRepository) {
        this.contactRepository = contactRepository
    }

    async execute(): Promise<Contact[]> {
        return await this.contactRepository.getContacts();
    }
    
}