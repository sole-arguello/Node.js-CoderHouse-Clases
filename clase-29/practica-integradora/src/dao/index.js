import { BusinessMongo } from "./manager/mongo/business.mongo.js";
import { UsersMongo } from "./manager/mongo/users.mongo.js";
import { OrdersMongo } from "./manager/mongo/orders.mongo.js";

export const businessDao = new BusinessMongo();
export const usersDao = new UsersMongo();
export const ordersDao = new OrdersMongo();