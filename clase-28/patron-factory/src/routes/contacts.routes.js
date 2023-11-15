import { Router } from "express";
import { contactsDao } from "../dao/factory.js";

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
router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const contact = await contactsDao.getOne(userId);
  res.json({ status: "success", data: contact });
})

export { router as contactRouter };
