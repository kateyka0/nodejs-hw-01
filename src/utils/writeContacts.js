const fs = require('fs').promises;
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => { try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error('Error writing contacts:', error.message);
  }
};

module.exports = { writeContacts };
