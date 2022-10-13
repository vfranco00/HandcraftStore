import { Router } from 'express';
import ProductController from '../controller/productController';
import productValidation from '../middleware/ProductValidation';

const router = Router();
const productController = new ProductController();

router.get('/', productController.getAllProd, productValidation);
router.post('/', productController.addProd);

export default router;