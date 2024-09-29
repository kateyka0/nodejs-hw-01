import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const removeLastContact = async () => {
 const contacts = await readContacts();
    contacts.push(createFakeContact()); 
    await writeContacts(contacts);
    console.log('New contact added.');
};
removeLastContact();

