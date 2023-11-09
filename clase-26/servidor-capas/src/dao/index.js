import { ToysMemory } from './managers/memory/toys.memory.js';
import { UsersMemory } from './managers/memory/users.memeory.js';

//capa de persistencia
export const toysDao = new ToysMemory()
export const usersDao = new UsersMemory()
