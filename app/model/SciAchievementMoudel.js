/**
 * 科研考评模块
 */
let mongoose = require('../../utils/db');
let Schema = mongoose.Schema;
let SciAchievementShema = new Schema({
    name: {type: String, required: true},//用户姓名
    jobID: {type: String, require: true},//工号
    station: {type: String, require: true},//岗位
    auditRecord: {type: Array, require: true},//审核记录，包括以下四个字段
    //  auditStatus: {type: String, require: true},//审核状态
    //  auditPerson: {type: String, require: true},//审核人
    //  auditTime: {type: String, require: true},//审核时间
    //  auditReason: {type: String, require: true},//审核理由
    submitTime: {type:String, require: true},//提交时间
    // sciPapers: {type: Object, required: true},//科研论文
    // scienceProgrom: {type: Object, required: true},//科研项目
    sciAchievement: {type:Object, required: true}//科研成果奖励
})
let SciAchievementMoudel = mongoose.model('SciAchievement',SciAchievementShema);
SciAchievementMoudel.ensureIndexes(function(err) {
    if(err) {
        console.log('err--->')
    } else {
        console.log('success--->');
    }
})
module.exports = SciAchievementMoudel;