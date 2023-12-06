import { Router } from "express";
import { getUsers, createUser, getUser, getUserContacts } from "../controllers/users.controller.js";


const router = Router();

router.get("/api/users", getUsers);
router.post("/api/users", createUser);
router.get("/api/users/:id", getUser);
router.get("/api/users/:id/contacts", getUserContacts);

export default router;