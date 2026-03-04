import { Response } from 'express';

export function success(res: Response, data: any, message: string = '操作成功') {
  return res.json({
    code: 200,
    data,
    message,
  });
}

export function error(res: Response, code: number, message: string) {
  return res.status(code >= 100 && code < 600 ? code : 500).json({
    code,
    data: null,
    message,
  });
}
