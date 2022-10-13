import { IProduct } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async getAll() {
    const allProducts = await this.model.getAllProd();

    return allProducts;
  }

  async addProd(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.addProduct(product);
    return newProduct;
  }
}