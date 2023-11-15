import { ContactsMemory } from "./managers/memory/constacs.memory.js";
import { ContactsMongo } from "./managers/mongo/constacts.mongo.js";

//export const contactsDao = new ContactsMemory()

export const contactsDao = new ContactsMongo()