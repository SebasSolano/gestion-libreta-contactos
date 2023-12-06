import { Router } from "express";


const router = Router();

router.get("/api/contacts");
router.post("/api/contacts");
router.put("/api/contacts/:id");
router.delete("/api/contacts/:id");
router.get("/api/contacts/:id");

export default router;