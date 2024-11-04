import { Router } from "express";
import { createUser, getUserById, getUsers } from "../hendlers/users.js";

const router = Router();

//Router's get ['/' == "/api/users"]
router.get("/", getUsers);
router.get("/:id", getUserById);

//Post
router.post("/",createUser);

//Export
export default router;
