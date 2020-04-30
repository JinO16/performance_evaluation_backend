/**
 * 教学教研考评四大模块之一————教学教研模块
 */
let mongoose = require('../../utils/db');
let Schema = mongoose.Schema;
let TeachResShema = new Schema({
    name: {type: String, required: true},//用户姓名
    jobID: {type: String, require: true},//工号
    station: {type: String, require: true},//岗位
    auditRecord: {type: Array, require: true},//审核记录，包括以下四个字段
    // auditStatus: {type: String, require: true},//审核状态
    // auditPerson: {type: String, require: true},//审核人
    // auditTime: {type: String, require: true},//审核时间
    // auditReason: {type: String, require: true},//审核理由
    submitTime: {type:String, require: true},//提交时间
    teachQuality: {type: Object, required: true},//教学质量评价
    teachPaper: {type: Object, required: true},//教研论文
    teachProgrom: {type: Object, required: true},//教研项目
    teachAward: {type:Object, required: true}
})
let TeachResMoudel = mongoose.model('TeachRes',TeachResShema);
TeachResMoudel.ensureIndexes(function(err) {
    if(err) {
        console.log('err--->')
    } else {
        console.log('success--->');
    }
})
module.exports = TeachResMoudel;