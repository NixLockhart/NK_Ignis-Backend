import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';
import configRoute from './modules/config/config.route';

const app = express();

// 基础中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 路由挂载
app.use('/api/config', configRoute);

// 全局异常处理（必须最后注册）
app.use(errorHandler);

export default app;
