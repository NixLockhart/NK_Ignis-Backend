import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: parseInt(process.env.PORT || '3000', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',

  DATABASE_URL: process.env.DATABASE_URL || '',

  JWT_SECRET: process.env.JWT_SECRET || 'default-secret',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',

  // AI 总开关
  ENABLE_AI: process.env.ENABLE_AI === 'true',
  // AI 细粒度开关
  ENABLE_AI_DESCRIPTION: process.env.ENABLE_AI_DESCRIPTION === 'true',
  ENABLE_AI_CHECKIN: process.env.ENABLE_AI_CHECKIN === 'true',
  ENABLE_AI_RECOMMENDATION: process.env.ENABLE_AI_RECOMMENDATION === 'true',

  // Dify 配置
  DIFY_API_URL: process.env.DIFY_API_URL || '',
  DIFY_API_KEY: process.env.DIFY_API_KEY || '',
};
