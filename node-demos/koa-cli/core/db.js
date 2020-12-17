const Sequelize = require('sequelize')
const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/config').database
const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    // create_time update_time delete_time
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true, // 将驼峰命名改为下划线命名
  }
})

sequelize.sync({
  force: false  // 为true时可以为表临时添加字段(这个慎用，开发阶段为了方便可以改为true)
}) // sequelize自动创建表到数据数据库

module.exports = {
  sequelize
}