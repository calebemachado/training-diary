import { Contact } from "../../../../src/domain/entities/Contact";
import { ContactRepository } from "../../../../src/domain/interfaces/repositories/IContact.repository";
import { GetAllContacts } from "../../../../src/domain/use-cases/GetAllContactsImpl";

describe("Get All Contacts Use Case", () => {

    class MockContactRepository implements ContactRepository {
        createContact(contact: Contact): Promise<boolean> {
            throw new Error("Method not implemented.");
        }
        getContacts(): Promise<Contact[]> {
            throw new Error("Method not implemented.");
        }
    }

    let mockContactRepository: ContactRepository;

    beforeEach(() => {
        jest.clearAllMocks();
        mockContactRepository = new MockContactRepository();
    })

    test("should return data", async () => {
        const ExpectedResult = [{ id: "1", surname: "Machado", firstName: "Calebe", email: "calebemachado@gmail.com" }]

        jest.spyOn(mockContactRepository, "getContacts").mockImplementation(() => Promise.resolve(ExpectedResult))
        const getAllContactsUseCase = new GetAllContacts(mockContactRepository)
        const result = await getAllContactsUseCase.execute()
        expect(result).toStrictEqual(ExpectedResult)
    })
})