-- ========== 种子数据（volunteer_db） ==========
-- 密码均使用 BCrypt 加密
-- admin123 -> $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
-- 123456  -> $2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36PBEGEsYkJ2oBl8JYm3mGK

-- 清空已有数据（按外键顺序删除）
DELETE FROM `service_records`;
DELETE FROM `check_ins`;
DELETE FROM `registrations`;
DELETE FROM `activities`;
DELETE FROM `users`;

-- 插入用户数据（1 管理员 + 4 志愿者）
INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone`, `role`, `interest_tags`, `total_service_hours`) VALUES
(1, 'admin', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'admin@nku.edu.cn', '13800000000', 'admin', '["管理", "组织协调"]', 0),
(2, '张明', '$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36PBEGEsYkJ2oBl8JYm3mGK', 'zhangming@nku.edu.cn', '13800000001', 'volunteer', '["环保", "社区服务", "植树造林"]', 0),
(3, '李华', '$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36PBEGEsYkJ2oBl8JYm3mGK', 'lihua@nku.edu.cn', '13800000002', 'volunteer', '["支教", "儿童关怀", "教育"]', 0),
(4, '王芳', '$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36PBEGEsYkJ2oBl8JYm3mGK', 'wangfang@nku.edu.cn', '13800000003', 'volunteer', '["赛会服务", "活动策划", "文体"]', 0),
(5, '陈杰', '$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36PBEGEsYkJ2oBl8JYm3mGK', 'chenjie@nku.edu.cn', '13800000004', 'volunteer', '["敬老助残", "社区服务"]', 0);

-- 插入活动数据（3 种状态各一个）
INSERT INTO `activities` (`id`, `title`, `description`, `location`, `start_time`, `end_time`, `max_volunteers`, `status`, `creator_id`) VALUES
(1, '校园环保清洁行动', '组织志愿者对校园主要道路、教学楼周边区域进行清洁活动，倡导环保理念。', '南开大学津南校区', '2026-03-15 08:00:00', '2026-03-15 12:00:00', 30, 'recruiting', 1),
(2, '社区老年人陪伴计划', '前往社区养老院，陪伴老人聊天、读报、进行简单的文娱活动。', '津南区双港镇社区养老院', '2026-03-01 09:00:00', '2026-03-01 16:00:00', 15, 'ongoing', 1),
(3, '春季义务植树活动', '在校园东门绿化带开展义务植树活动，美化校园环境。', '南开大学八里台校区东门绿化带', '2026-02-20 08:00:00', '2026-02-20 12:00:00', 50, 'completed', 1);
