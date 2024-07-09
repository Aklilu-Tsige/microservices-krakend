import { Request, Response } from 'express';
import { userAccountService } from '../services/userAccountService';

class UserAccountController {
    findAll(req: Request, res: Response): void {
        const result = userAccountService.findAll();
        res.status(200).json(result);
    }

    findById(req: Request, res: Response): void {
        const result = userAccountService.findById(Number(req.params.id));
        if (result.data) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    }

    create(req: Request, res: Response): void {
        const result = userAccountService.create(req.body);
        res.status(201).json(result);
    }

    update(req: Request, res: Response): void {
        const result = userAccountService.update(Number(req.params.id), req.body);
        if (result.data) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    }

    delete(req: Request, res: Response): void {
        const result = userAccountService.delete(Number(req.params.id));
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    }
}

export const userAccountController = new UserAccountController();
