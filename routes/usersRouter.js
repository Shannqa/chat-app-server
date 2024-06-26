import {
  users_addcontact,
  users_deletecontact,
  users_getcontacts,
} from "../controllers/users_controller.js";
import express from "express";
import { LocalAuth, JwtAuth, authJWT } from "../config/auth.js";

const router = express.Router();

router.post("/users/contacts", authJWT, users_addcontact);

router.get("/users/contacts", authJWT, users_getcontacts);

router.delete("/users/contacts", authJWT, users_deletecontact);

export default router;
