let TeachRes = require('../model/TeachResMoudel');
let mongoose = require('mongoose');
module.exports = {
    //添加教学教研
    createTeachRes: function (reqParam) {
        return new Promise ((resolve,reject) => {
            let data = {};
            reqParam.name && (data.name = reqParam.name);
            reqParam.jobID && (data.jobID = reqParam.jobID);
            reqParam.station && (data.station = reqParam.station);
            reqParam.auditRecord && (data.auditRecord = reqParam.auditRecord);
            // reqParam.auditStatus && (data.auditStatus = reqParam.auditStatus);
            // reqParam.auditPerson && (data.auditPerson = reqParam.auditPerson);
            // reqParam.auditTime && (data.auditTime = reqParam.auditTime);
            // reqParam.auditReason && (data.auditReason = reqParam.auditReason);
            reqParam.teachQuality && (data.teachQuality = reqParam.teachQuality);
            reqParam.teachPaper && (data.teachPaper = reqParam.teachPaper);
            reqParam.teachProgrom && (data.teachProgrom = reqParam.teachProgrom);
            reqParam.teachAward && (data.teachAward = reqParam.teachAward);
            reqParam.submitTime && (data.submitTime = reqParam.submitTime);
            let TeachResData = new TeachRes(data);
            TeachResData.save(function (err, data) {
                if (err) {
                    reject({ code: 500, message: '创建失败'})
                } else {
                    resolve({ code: 200, message: '添加成功', result: data});
                }
            })
        })
    },
    //用户获取自己的教学教研模块清单
    getOwnTeachRes: (reqParam) => {
        return new Promise((resolve, reject) => {
            let data = {},skip,limit;
            if (reqParam.skip) skip = reqParam.skip;
            else skip = 0;
            if (reqParam.limit) limit = reqParam.limit;
            else limit = 10;
            TeachRes.countDocuments(reqParam, function( err, count) {
                if (err) {
                    reject({ code: 500, message:'获取数据失败' + err.message})
                } else {
                    TeachRes.find(data, null, {skip:parseInt(skip), limit: parseInt(limit)}, function (err, docs) {
                        if (err) {
                            reject({ code: 201, message: '获取数据失败' + err.message});
                        } else {
                            resolve({ code: 200, count: count,message: '获取成功！',result: docs})
                        }
                    })
                }
            })
            
        })
    },
    //删除一条教学教研清单
    deleteTeachRes: (reqParam) => {
        return new Promise((resolve,reject) => {
            let data = {};
            if (!reqParam._id) {
                reject({ code: 201, message: '删除失败,请刷新重试！'})
            } else {
                data._id = mongoose.Types.ObjectId(reqParam._id);
            }
            TeachRes.findByIdAndRemove(data, function (err, data) {
                if (err) {
                    reject({ code: 500,message:'删除失败，'+ err.message})
                } else {
                    resolve({ code: 200, message: '删除成功！'})
                }
            })
        })
    },
    //修改某一条教学教研清单
    updateTeachRes: (reqParam) => {
        return new Promise((resolve, reject) => {
            let data = {}, updateData = {};
            if (!reqParam._id) {
                reject({ code: 201, message:'修改失败，请刷新重试!'})
            } else {
                data._id = mongoose.Types.ObjectId(reqParam._id);
            }
            reqParam.name && (updateData.name = reqParam.name);
            reqParam.jobID && (updateData.jobID = reqParam.jobID);
            reqParam.station && (updateData.station = reqParam.station);
            reqParam.auditRecord && (updateData.auditRecord = reqParam.auditRecord);
            // reqParam.auditStatus && (updateData.auditStatus = reqParam.auditStatus);
            // reqParam.auditPerson && (updateData.auditPerson = reqParam.auditPerson);
            // reqParam.auditTime && (updateData.auditTime = reqParam.auditTime);
            // reqParam.auditReason && (updateData.auditReason = reqParam.auditReason);
            reqParam.teachQuality && (updateData.teachQuality = reqParam.teachQuality);
            reqParam.teachPaper && (updateData.teachPaper = reqParam.teachPaper);
            reqParam.teachProgrom && (updateData.teachProgrom = reqParam.teachProgrom);
            reqParam.teachAward && (updateData.teachAward = reqParam.teachAward);
            reqParam.submitTime && (updateData.submitTime = reqParam.submitTime);
            TeachRes.findByIdAndUpdate(data._id,updateData,{new: false}, function(err,data) {
                if (err) {
                    reject({ code: 500, message: '修改失败，'+ err.message});
                } else {
                    resolve({ code: 200, message: '修改成功！'})
                }
            })
        })
    },
    //获取所有教学教研数据单
    getAllTeachRes: function (reqParam) {
        return new Promise((resolve, reject) => {
            let data = {}, skip, limit;
            if (reqParam.skip) {
                skip = reqParam.skip;
            } else {
                skip = 0;
            }
            if (reqParam.limit) {
                limit = reqParam.limit;
            } else {
                limit = 10;
            }
            if (reqParam._id) data._id = reqParam._id;
            if (reqParam.jobID) data.jobID = reqParam.jobID;
            TeachRes.countDocuments(data, function (err,count) {
                if (err) {
                    reject({ code: 500, message: '获取数据失败，' + err.message});
                } else {
                    TeachRes.find(data, null, {skip: parseInt(skip), limit: parseInt(limit)}, function(err, docs) {
                        if(err) {
                            reject({ code: 201, message: '数据获取失败，'+ err.message});
                        } else {
                            resolve({ code: 200, count: count, message: '获取数据成功！', result:docs})
                        }
                    })
                }
            })
        })
    }
}