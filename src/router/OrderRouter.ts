import { Router } from 'express';
import OrderController from '../controller/orderController';

const router = Router();
const orderController = new OrderController();

router.get('/', orderController.getAllOrders);

export default router;