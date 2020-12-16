const {
  LinValidator,
  Rule
} = require('../../core/lin-validator-v2')
const { LoginType } = require('../lib/enum')

const {User} = require('../models/user')


class PositiveIntegerValidator extends LinValidator {
  constructor() {
      super()
      this.id = [
          new Rule('isInt', '需要是正整数', {
              min: 1
          }),
      ]
  }
}

class RegisterValidator extends LinValidator {
  constructor() {
    super()
    this.email = [
      new Rule('isEmail', '不符合Email规范')
    ]
    this.password1 = [
      new Rule('isLength', '密码至少6个字符，最多32个字符', {
        min: 6,
        max: 32
      }),
      new Rule('matches', '密码不符合规范', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]')
    ]
    this.password2 = this.password1
    this.nickname = [
      new Rule('isLength', '昵称不符合长度规范', {
        min: 4,
        max: 32
      })
    ]
  }
  validatePassword(vals) {
    const psw1 = vals.body.password1
    const psw2 = vals.body.password2
    if (psw1 !== psw2) {
      throw new Error('两个密码必须相同')
    }
  }
  // 校验邮箱是否重复
  async validateEmail(vals) {
    const email = vals.body.email
    const user = await User.findOne({
      where: {
        email: email
      }
    })
    if (user) {
      throw new Error('email已存在')
    }
  }
}

class TokenValidator extends LinValidator {
  constructor() {
    super()
    this.account = [
      new Rule('isLength', '不符合账号规则', {
        min: 4,
        max: 32
      })
    ]
    this.secret = [
      new Rule('isOptional'), // 这个密码可以不传，也可以传，如果传递的话，要符合下面的规范
      new Rule('isLength', '至少6个字符', {
        min: 6,
        max: 128
      })
    ]
  }
  validateLoginType(vals) {
    if (!vals.body.type) {
      throw new Error('type是必须参数')
    }
    if(!LoginType.isThisType(vals.body.type)) {
      throw new Error('type参数不合法')
    }
  }
}

module.exports = {
  PositiveIntegerValidator,
  RegisterValidator,
  TokenValidator
}