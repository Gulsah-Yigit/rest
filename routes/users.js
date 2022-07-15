import express from "express";
import {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getUserWithID,
} from "../controllers/users.js";

const router = express.Router();

//GET
router.get("/users", getAllUsers);
router.get("/users/:id", getUserWithID);

//POST
router.post("/users", createUser);

//DELETE
router.delete("/users/:id", deleteUser);

//UPDATE -> Patch
router.patch("/users/:id", updateUser);

export default router;
