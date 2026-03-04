import { Request, Response, NextFunction } from 'express';
import { error } from '../common/response';

export function requireRole(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return error(res, 401, '未登录');
    }
    if (!roles.includes(req.user.role)) {
      return error(res, 403, '权限不足');
    }
    next();
  };
}
