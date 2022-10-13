import { Request, Response } from 'express';
import OrderService from '../service/orderService';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  getAllOrders = async (_req: Request, res: Response) => {
    const allOrders = await this.service.getAllOrders();
    res.status(200).json(allOrders);
  };
}