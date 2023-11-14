import { Router } from "express";
import { contactsDao } from "../dao/index.js";

const router = Router();

router.get("/", async (req, res) => {
  const contacts = await contactsDao.getAll();
  res.json({ status: "success", data: contacts });
});

router.post("/", async (req, res) => {
  const contactInfo = req.body;
  const newContact = await contactsDao.create(contactInfo);
  res.json({ status: "success", data: newContact });
});

export { router as contactRouter };
