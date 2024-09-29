const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');

export const removeLastContact = async () => {
     const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    await writeContacts(contacts);
    console.log('Last contact removed.');
  } else {
    console.log('No contacts to remove.');
  }
};

removeLastContact();
