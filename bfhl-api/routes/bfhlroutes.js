import express from "express";
import { handlebfhl } from "../controllers/bfhlcontroller.js";
const router = express.Router();
router.post("/", handlebfhl);
export default router;