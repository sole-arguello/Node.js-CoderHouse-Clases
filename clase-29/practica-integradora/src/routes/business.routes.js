import {Router } from 'express';
import { BusinessController } from '../controllers/business.controller.js';

const router = Router();

router.get('/', BusinessController.getAllBusiness);

router.get('/:id', BusinessController.getOneBusiness);

router.post('/', BusinessController.createBusiness);

router.put('/:id/products', BusinessController.addProducts);

export { router as businessRouter }