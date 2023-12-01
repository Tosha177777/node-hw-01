import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";
import { Command } from "commander";
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      listContacts();
      break;

    case "get":
      // ... id
      getContactById(id);
      break;

    case "add":
      // ... name email phone
      addContact(name, email, phone);
      break;

    case "remove":
      // ... id
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
