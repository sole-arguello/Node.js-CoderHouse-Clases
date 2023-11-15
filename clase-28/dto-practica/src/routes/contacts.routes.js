import { Router } from "express";
import { contactsDao } from "../dao/index.js";
import { CreateContactDto } from '../dao/dto/createContact.dto.js'

const router = Router();

router.get("/", async (req, res) => {
  const contacts = await contactsDao.getAll();
  res.json({ status: "success", data: contacts });
});

router.post("/", async (req, res) => {
  try {
    const contactInfo = req.body;
    const constctDto = new CreateContactDto(contactInfo);
    console.log('constctDto', constctDto);
    const newContact = await contactsDao.create(constctDto);
    res.json({ status: "success", data: newContact });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
});

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const contact = await contactsDao.getOne(userId);
  //dto que quite el mail ejemplo
  //const resultDTo = new GetContactDto(result)
  //res.json({ status: "success", data: resultDTo });
  res.json({ status: "success", data: contact });
})

export { router as contactRouter };
