const { createFakeContact } = require('../utils/createFakeContact');
const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');

const generateContacts = async (number) => {  const contacts = await readContacts();
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
    await writeContacts(contacts);
};

generateContacts(5);
