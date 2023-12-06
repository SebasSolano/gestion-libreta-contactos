import { Router } from "express";
import {
  getUsers,
  createUser,
  getUser,
  getUserContacts,
  loginUser,
} from "../controllers/users.controller.js";

const router = Router();

router.post("/api/login", loginUser);
router.get("/api/users", getUsers);
router.post("/api/register", createUser);
router.get("/api/users/:id", getUser);
router.get("/api/users/:id/contacts", getUserContacts);

export default router;
