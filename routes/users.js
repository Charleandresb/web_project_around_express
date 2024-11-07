import express from "express";
import {
  getUsers,
  getUserById,
  getUserInfo,
  editProfile,
  editAvatar,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/userinfo", getUserInfo);
router.patch("/me", editProfile);
router.patch("/me/avatar", editAvatar);

export default router;
