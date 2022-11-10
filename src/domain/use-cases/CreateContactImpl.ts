import { Contact } from "../entities/Contact";
import { ContactRepository } from "../interfaces/repositories/IContact.repository";
import { CreateContactUseCase } from "../interfaces/use-cases/ICreateContact.usecase";

export class CreateContact implements CreateContactUseCase {
    contactRepository: ContactRepository

    constructor(contactRepository: ContactRepository) {
        this.contactRepository = contactRepository
    }

    async execute(contact: Contact): Promise<boolean> {
        return await this.contactRepository.createContact(contact)
    }

}