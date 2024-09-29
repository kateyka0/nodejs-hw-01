const { writeContacts } = require('../utils/writeContacts');

export const removeAllContacts = async () => {
    await writeContacts([]);
  console.log('All contacts removed.');
};

removeAllContacts();
