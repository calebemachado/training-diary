import { Contact } from "../../entities/Contact";
export interface CreateContactUseCase {
    execute(contact: Contact): Promise<boolean>;
}