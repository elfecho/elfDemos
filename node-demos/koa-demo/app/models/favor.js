const {sequelize} = require('../../core/db')
const {
  Sequelize,
  Model,
  Op
} = require('sequelize')

const {
  Art
} = require('./art.js')

class Favor extends Model {
  // 业务表
  static async like(art_id, type, uid) {
    // 1 添加记录
    // 2 classic fav_nums
    // 数据库事务 （保证数据一致性）同时操作多个表的时候需要考虑数据库事务

    // ACID 原则性  一致性 隔离性 持久性
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid
      }
    })
    if (favor) {
      throw new global.errs.LikeError()
    }

    return sequelize.transaction(async t=> {
      await Favor.create({
        art_id,
        type,
        uid
      }, {transaction: t}) // 新增到喜欢的表
      const art = await Art.getData(art_id, type)
      await art.increment('fav_nums', {
        by: 1,
        transaction: t
      })
    })

  }
  static async dislike(art_id, type, uid) {
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid
      }
    })
    if (!favor) {
      throw new global.errs.DislikeError()
    }
    // Favor 表  favor 记录
    return sequelize.transaction(async t=> {
      await favor.destroy({
        force: true, // false软删除  true记录删除
        transaction: t
      }) // 新增到喜欢的表
      const art = await Art.getData(art_id, type)
      await art.decrement('fav_nums', {
        by: 1,
        transaction: t
      })
    })
  }
  static async userLikeIt(art_id, type, uid) {
    const favor = await Favor.findOne({
      where: {
        uid,
        art_id,
        type
      }
    })
    return favor ? true : false
  }
  static async getMyClassicFavors(uid) {
    const arts = await Favor.findAll({
        where: {
            uid,
            type:{
                [Op.not]:400,
            }
        }
    })
    if(!arts){
        throw new global.errs.NotFound()
    }
   
    return await Art.getList(arts)
  }
}

Favor.init({
  uid: Sequelize.INTEGER,
  art_id: Sequelize.INTEGER,
  type: Sequelize.INTEGER
}, {
  sequelize,
  tableName:'favor'
})


module.exports = {
  Favor
}