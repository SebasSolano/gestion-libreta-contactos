import { Router } from "express";


const router = Router();

router.get("/api/users");
router.post("/api/users");
router.get("/api/users/:id");
router.get("/api/users/:id/contacts");

export default router;