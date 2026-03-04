import app from './app';
import { env } from './config/env';
import { PrismaClient } from '@prisma/client';
import logger from './common/logger';

export const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    logger.info('数据库连接成功');

    app.listen(env.PORT, () => {
      logger.info(`服务器启动成功，监听端口 ${env.PORT}`);
      logger.info(`环境: ${env.NODE_ENV}`);
      logger.info(`AI 总开关: ${env.ENABLE_AI ? '开启' : '关闭'}`);
    });
  } catch (err) {
    logger.error(`启动失败: ${err}`);
    process.exit(1);
  }
}

main();
