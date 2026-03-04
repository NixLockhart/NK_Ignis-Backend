import { Request, Response } from 'express';
import { env } from '../../config/env';
import { success } from '../../common/response';

export function getConfig(_req: Request, res: Response) {
  return success(res, {
    ai_recommendation: env.ENABLE_AI && env.ENABLE_AI_RECOMMENDATION,
    ai_description: env.ENABLE_AI && env.ENABLE_AI_DESCRIPTION,
    ai_checkin: env.ENABLE_AI && env.ENABLE_AI_CHECKIN,
  });
}
