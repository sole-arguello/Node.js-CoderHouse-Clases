import { MongoSinglenton } from "./mongoSingelnton.js";

const firstInstance = MongoSinglenton.getInstance();
const secondInstance = MongoSinglenton.getInstance();