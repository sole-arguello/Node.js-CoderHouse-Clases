import {Router } from 'express';
import { OrdersControllers } from '../controllers/order.controller.js';

const router = Router();

router.get('/:oid', OrdersControllers.getOrder);

router.post('/', OrdersControllers.createOrder);

router.put('/:oid', OrdersControllers.modifyStatusOrder);

export { router as ordersRouter }