import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAllProd() {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    const [allProducts] = result;
    return allProducts as IProduct[];
  }

  async addProduct(product: IProduct) {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product } as IProduct;
  }
}