const {sequelize} = require('../../core/db')
const {Sequelize,Model} = require('sequelize')
const { Art } = require('./art')
const { Favor } = require('./favor')


class Flow extends Model{
    static async getDetail(art_id, type, index, uid) {
        const art = await Art.getData(art_id, type)
        const likeLatest = await Favor.userLikeIt(art_id, type, uid)
        // art.dataValues.index = flow.index 不严谨
        art.setDataValue('index', index)// 类的序列化 对象
        art.setDataValue('like_status', likeLatest)
        // art.exclude = ['index','like_status']
        return art
    }
    static async getAround(index, uid, mode) {
        const flow = await Flow.findOne({
            where: {
            index: mode === 'next' ? index + 1 : index - 1
            }
        })
        if (!flow) {
            throw new global.errs.NotFound()
        }
        const art = await this.getDetail(flow.art_id, flow.type, flow.index, uid)

        return art
    }
}

Flow.init({
    index: Sequelize.INTEGER,
    art_id: Sequelize.INTEGER,
    type: Sequelize.INTEGER
},{
    sequelize,
    tableName:'flow'
})

module.exports = {
    Flow
}