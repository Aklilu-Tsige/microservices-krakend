import { Router } from 'express';
import { userAccountController } from '../controllers/userAccountController';

const router = Router();

router.get('/userAccounts', userAccountController.findAll.bind(userAccountController));
router.get('/userAccounts/:id', userAccountController.findById.bind(userAccountController));
router.post('/userAccounts', userAccountController.create.bind(userAccountController));
router.put('/userAccounts/:id', userAccountController.update.bind(userAccountController));
router.delete('/userAccounts/:id', userAccountController.delete.bind(userAccountController));

export default router;
