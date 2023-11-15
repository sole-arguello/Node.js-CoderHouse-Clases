import { Router } from "express";
import { CreateContactDto } from '../dao/dto/createContact.dto.js'
import { contactsService } from '../repository/index.js'

const router = Router();

router.get("/", async (req, res) => {
  const contacts = await contactsService.getContacts();
  res.json({ status: "success", data: contacts });
});

router.post("/", async (req, res) => {
  try {
    const contactInfo = req.body;
    const newContact = await contactsService.createContac(contactInfo);
    res.json({ status: "success", data: newContact });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
});

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const contact = await contactsService.getContact(userId);
  //dto que quite el mail ejemplo
  //const resultDTo = new GetContactDto(result)
  //res.json({ status: "success", data: resultDTo });
  res.json({ status: "success", data: contact });
})

export { router as contactRouter };
