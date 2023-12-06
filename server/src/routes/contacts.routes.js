import { Router } from "express";
import { getContacts, createContact, getContact, updateContact, deleteContact } from "../controllers/contacts.controller.js";


const router = Router();

router.get("/api/contacts", getContacts);
router.post("/api/contacts", createContact);
router.put("/api/contacts/:id", updateContact);
router.delete("/api/contacts/:id", deleteContact);
router.get("/api/contacts/:id", getContact);

export default router;