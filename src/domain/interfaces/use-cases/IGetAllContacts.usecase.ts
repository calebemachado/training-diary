import { Contact } from "../../entities/Contact"; 
export interface GetAllContactsUseCase { 
    execute(): Promise<Contact[]>; 
}