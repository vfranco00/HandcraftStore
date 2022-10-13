import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import ProductService from '../service/productService';

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  getAllProd = async (req: Request, res: Response) => {
    const allProducts = await this.service.getAll();
    res.status(200).json(allProducts);
  };

  addProd = async (req: Request, res: Response) => {
    const product = req.body as IProduct;
    const newProd = await this.service.addProd(product);
    res.status(201).json(newProd);
  };
}