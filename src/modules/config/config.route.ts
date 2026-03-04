import { Router } from 'express';
import { getConfig } from './config.controller';

const router = Router();

// GET /api/config — 公开接口，无需登录
router.get('/', getConfig);

export default router;
