import { Router } from 'express';
import UserController from '../controller/userController';

const router = Router();
const userController = new UserController();

router.post('/', userController.addUser);

export default router;