const {Sequelize, Model} = require('sequelize')
const {unset, clone, isArray} = require('lodash')
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
    freezeTableName: true,
    scopes: {
      bh: {
        attributes: {
          exclude: ['created_at', 'updated_at', 'deleted_at'] // 移除时间的返回字段
        }
      }
    }
  }
})

sequelize.sync({
  force: false  // 为true时可以为表临时添加字段(这个慎用，开发阶段为了方便可以改为true)
}) // sequelize自动创建表到数据数据库

// 全局控制Model模型JSON序列化
Model.prototype.toJSON= function(){
  // let data = this.dataValues
  let data = clone(this.dataValues)
  unset(data, 'updated_at')
  unset(data, 'created_at')
  unset(data, 'deleted_at')

  for (key in data){
      if(key === 'image'){
          if(!data[key].startsWith('http'))
              data[key]=global.config.host + data[key]
      }
  }

  if(isArray(this.exclude)){
      this.exclude.forEach(
          (value)=>{
              unset(data,value)
          }
      )
  }
  // this.exclude
  // exclude
  // a,b,c,d,e
  return data
}


module.exports = {
  sequelize
}