import express from "express";
import authMiddlewware from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrders,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddlewware, placeOrder);
orderRouter.post("/verify", verifyOrders);
orderRouter.post("/userorders", authMiddlewware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
