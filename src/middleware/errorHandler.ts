import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import logger from '../common/logger';

export function errorHandler(err: any, req: Request, res: Response, _next: NextFunction) {
  logger.error(`${req.method} ${req.path} - ${err.message || err}`);

  // Zod 校验错误
  if (err instanceof ZodError) {
    return res.status(400).json({
      code: 400,
      data: null,
      message: '参数校验失败',
      errors: err.issues.map((i) => ({
        field: i.path.join('.'),
        message: i.message,
      })),
    });
  }

  // 自定义业务错误（带 statusCode）
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      code: err.statusCode,
      data: null,
      message: err.message || '请求错误',
    });
  }

  // 未知错误
  return res.status(500).json({
    code: 500,
    data: null,
    message: '服务器内部错误',
  });
}
