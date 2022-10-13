import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html
  // https://dev.mysql.com/worklog/task/?id=11574

  async getAllOrders() {
    const [result] = await this.connection.execute(
      `SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds 
      FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS products
      ON orders.id = products.orderId
      GROUP BY orders.id`,
    );
    return result as IOrder[];
  }
}