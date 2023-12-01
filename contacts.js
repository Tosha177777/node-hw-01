import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
const contactsPath = path.join("db", "contacts.json");

// TODO: задокументувати кожну функцію
export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    console.table(contacts);
    return contacts;
  } catch (error) {
    console.log(error);
  }
}

export async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const contact = contacts.filter((c) => contactId === c.id);
    console.table(contact);
    return contact || null;
  } catch (error) {
    console.log(error);
  }
}

export async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  try {
    const data = await fs.readFile(contactsPath);
    let contacts = JSON.parse(data);
    const removedContact = contacts.filter((c) => c.id === contactId);
    contacts = contacts.filter((c) => contactId !== c.id);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.table(contacts);

    return removedContact || null;
  } catch (error) {
    console.log(error);
  }
}

export async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);

    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.table(contacts);
    return newContact;
  } catch (error) {
    console.log(error);
  }
}
