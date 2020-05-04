/**
 * 教学教研考评四大模块之一————教学教研模块
 */
let mongoose = require('../../utils/db');
let Schema = mongoose.Schema;
let ScienceResShema = new Schema({
    name: {type: String, required: true},//用户姓名
    jobID: {type: String, require: true},//工号
    station: {type: String, require: true},//岗位
    auditStatus: {type: String, require: true},//审核状态
    auditPerson: {type: String, require: true},//审核人
    auditTime: {type: String, require: true},//审核时间
    auditReason: {type: String, require: true},//审核理由
    submitTime: {type:String, require: true},//提交时间
  //  teachQuality: {type: Object, required: true},//教学质量评价
    sciencePaper: {type: Object, required: true},//科研论文
    scienceProgrom: {type: Object, required: true},//科研项目
    scienceAward: {type:Object, required: true}
})
let ScienceResMoudel = mongoose.model('ScienceRes',ScienceResShema);
ScienceResMoudel.ensureIndexes(function(err) {
    if(err) {
        console.log('err--->')
    } else {
        console.log('success--->');
    }
})
module.exports = ScienceResMoudel;