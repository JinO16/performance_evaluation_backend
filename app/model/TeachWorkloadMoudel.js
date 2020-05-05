/**
 * 教学教研考评四大模块之一————工作量模块
 */
let mongoose = require('../../utils/db');
let Schema = mongoose.Schema;
let TeachWorkloadShema = new Schema({
    name: {type: String, required: true},//用户姓名
    jobID: {type: String, require: true},//工号
    station: {type: String, require: true},//岗位
    auditRecord: {type: Array, require: true},//审核记录
    submitTime: {type:String, require: true},//提交时间
    workLoad: {type:Object, require: true},//上课教学工作量总对象
    // classWork: {type: Number},//上课教学工作量
    // instructorWork: {type: Number},//辅导员带班工作量
    // experimentWork:{type: Number},//实验教学工作量
    // scienceFunds:{type: Number},//折抵教学工作量的科研经费金额（科研为主岗填写）
    // scienceFundsWork: {type: Number},//科研经费折抵的教学工作量（科研为主岗填写）
    // isFinish:{type: Boolean},//是否完成本部门人均相应工作量的三分之二
    // teachWorkSum:{type: Number},//教学工作量合计
    // scoreSum:{type: Number,required: true},//用于计分的工作量
    // itemScore:{type: Number,required: true},//个人逐项计分
})
let TeachWorkloadMoudel = mongoose.model('TeachWorkload',TeachWorkloadShema);
TeachWorkloadMoudel.ensureIndexes(function(err) {
    if (err) {
        console.log('err>> ',err);
    } else {
        console.log('success :>> ');
    }
})
module.exports = TeachWorkloadMoudel;