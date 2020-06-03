/**
 * 教学教研考评四大模块之一————工作量模块
 */
let mongoose = require('../../utils/db');
let Schema = mongoose.Schema;
let TeachWorkloadShema = new Schema({
    name: {type: String, required: true},//用户姓名
    jobID: {type: String, require: true},//工号
    station: {type: String, require: true},//岗位
    department: {type: String, require: true},//部门
    finalAuditRecord: {type: Array, require: true},//最终审核记录
    finalStatus: {type: String, require: true},//总审核状态
    submitTime: {type:String, require: true},//提交时间
    teachingMoudle: {type:Object, require: false},//教学教研总模块，里面包括workLoad等所有子模块
    xyrModule: {type:Object, require: false},//学科建设研究生工作人才引进模块
    zygxModule: {type:Object, require: false},//专业贡献模块
    xsgzModule: {type:Object, require: false}//学生工作模块

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