const bcrypt = require('bcryptjs')

const { sequelize } = require('../../core/db')

const { Sequelize, Model } = require('sequelize')

class User extends Model {
  static async verifyEmailPassword(account, plainPassword) {
    const user = await this.findOne({
      where: {
        email: account
      }
    })
    if (!user) {
      throw new global.errs.AuthFailed('账号不存在')
    }

    const correct = bcrypt.compareSync(plainPassword, user.password) // 因为数据库里面的密码是加密的，需要使用bcrypt.compareSync方法进行判断
    if (!correct) {
      throw new global.errs.AuthFailed('密码不正确')
    }
    return user
  }

  static async getUserByOpenid(openid) {
    const user = await this.findOne({
      where: {
        openid
      }
    })
    return user
  }

  static async registerByOpenid(openid) {
    return await this.create({
      openid
    })
  }
}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,    // 唯一值
    autoIncrement: true, // 自增长
  },
  nickname: Sequelize.STRING,
  email: {
    type: Sequelize.STRING(128),
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    set(val) {
      const salt = bcrypt.genSaltSync(10)
      const psw = bcrypt.hashSync(val, salt)
      this.setDataValue('password', psw)
    }
  },
  openid: {
    type: Sequelize.STRING(64),
    unique: true
  }
}, {
  sequelize,
  tableName: 'user'
})

module.exports = {
  User
}