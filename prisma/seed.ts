import { PrismaClient, Role, ActivityStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('开始填充种子数据...');

  // 清除已有数据（按外键依赖顺序）
  await prisma.serviceRecord.deleteMany();
  await prisma.checkIn.deleteMany();
  await prisma.registration.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash('123456', 10);
  const adminHash = await bcrypt.hash('admin123', 10);

  // ==================== 用户 ====================
  const admin = await prisma.user.create({
    data: {
      username: 'admin',
      password: adminHash,
      email: 'admin@nku.edu.cn',
      phone: '13800000000',
      role: Role.admin,
      interest_tags: JSON.stringify(['管理', '组织协调']),
    },
  });

  const user1 = await prisma.user.create({
    data: {
      username: '张明',
      password: passwordHash,
      email: 'zhangming@nku.edu.cn',
      phone: '13800000001',
      role: Role.volunteer,
      interest_tags: JSON.stringify(['环保', '社区服务', '植树造林']),
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: '李华',
      password: passwordHash,
      email: 'lihua@nku.edu.cn',
      phone: '13800000002',
      role: Role.volunteer,
      interest_tags: JSON.stringify(['支教', '儿童关怀', '教育']),
    },
  });

  const user3 = await prisma.user.create({
    data: {
      username: '王芳',
      password: passwordHash,
      email: 'wangfang@nku.edu.cn',
      phone: '13800000003',
      role: Role.volunteer,
      interest_tags: JSON.stringify(['赛会服务', '活动策划', '文体']),
    },
  });

  const user4 = await prisma.user.create({
    data: {
      username: '陈杰',
      password: passwordHash,
      email: 'chenjie@nku.edu.cn',
      phone: '13800000004',
      role: Role.volunteer,
      interest_tags: JSON.stringify(['敬老助残', '社区服务']),
    },
  });

  console.log(`已创建 5 个用户（1 管理员 + 4 志愿者）`);

  // ==================== 活动 ====================
  const now = new Date();

  const activity1 = await prisma.activity.create({
    data: {
      title: '校园环保清洁行动',
      description: '组织志愿者对校园主要道路和公共区域进行清洁，宣传垃圾分类知识，提升师生环保意识。',
      location: '南开大学津南校区',
      start_time: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
      end_time: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000),
      max_volunteers: 30,
      status: ActivityStatus.recruiting,
      creator_id: admin.id,
    },
  });

  const activity2 = await prisma.activity.create({
    data: {
      title: '社区老年人陪伴计划',
      description: '前往学校周边社区养老院，陪伴老人聊天、读报、组织简单的文体活动，传递温暖与关怀。',
      location: '津南区双港镇社区养老院',
      start_time: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
      end_time: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000),
      max_volunteers: 15,
      status: ActivityStatus.ongoing,
      creator_id: admin.id,
    },
  });

  const activity3 = await prisma.activity.create({
    data: {
      title: '春季义务植树活动',
      description: '在校园绿化带和周边社区开展义务植树，为建设绿色校园贡献力量。每位志愿者种植2-3棵树苗。',
      location: '南开大学八里台校区东门绿化带',
      start_time: new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000),
      end_time: new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000),
      max_volunteers: 50,
      status: ActivityStatus.completed,
      creator_id: admin.id,
    },
  });

  console.log(`已创建 3 个活动（recruiting / ongoing / completed）`);
  console.log('种子数据填充完成！');
  console.log('---');
  console.log('管理员账号: admin / admin123');
  console.log('志愿者账号: 张明 / 123456, 李华 / 123456, 王芳 / 123456, 陈杰 / 123456');
}

main()
  .catch((e) => {
    console.error('种子数据填充失败:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
