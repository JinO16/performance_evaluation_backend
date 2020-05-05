let TeachWorkload = require('../model/TeachWorkloadMoudel');
let mongoose = require('mongoose');
module.exports = {
    //添加工作量
    createTeachWorkload: function (reqParam) {
        return new Promise ((resolve,reject) => {
            let data = {};
            reqParam.name && (data.name = reqParam.name);
            reqParam.jobID && (data.jobID = reqParam.jobID);
            reqParam.station && (data.station = reqParam.station);
            reqParam.auditRecord && (data.auditRecord = reqParam.auditRecord);
            reqParam.submitTime && (data.submitTime = reqParam.submitTime);
            reqParam.workLoad && (data.workLoad = reqParam.workLoad);
            // reqParam.classWork && (data.classWork = reqParam.classWork);
            // reqParam.instructorWork && (data.instructorWork = reqParam.instructorWork);
            // reqParam.experimentWork && (data.experimentWork = reqParam.experimentWork);
            // reqParam.scienceFunds && (data.scienceFunds = reqParam.scienceFunds);
            // reqParam.scienceFundsWork && (data.scienceFundsWork = reqParam.scienceFundsWork);
            // reqParam.isFinish && (data.isFinish = reqParam.isFinish);
            // reqParam.teachWorkSum && (data.teachWorkSum = reqParam.teachWorkSum);
            // reqParam.scoreSum && (data.scoreSum = reqParam.scoreSum);
            // reqParam.itemScore && (data.itemScore = reqParam.itemScore);
            let TeachWorkloadData = new TeachWorkload(data);
            TeachWorkloadData.save(function (err,data) {
                if (err) {
                    reject({ code: 500, message: '创建失败！'});
                } else {
                    resolve({ code:200, message:'创建成功！', result: data})
                }
            })
        })
    },
    //用户获取自己的工作量模块清单
    getOwnTeachWorkload: (reqParam) => {
        return new Promise((resolve,reject) => {
            let data = {},skip,limit;
            if (reqParam.skip) skip = reqParam.skip;
            else skip = 0;
            if (reqParam.limit) limit = reqParam.limit;
            else limit = 10;
            console.log('server里面的reqParam :>> ', reqParam);
            TeachWorkload.countDocuments(reqParam, function(err, count) {
                if (err) {
                    reject({ code: 500, message:'获取数据失败！请稍后重试！'});
                } else {
                    if (reqParam.jobID) data.jobID = reqParam.jobID;
                    TeachWorkload.find(data,null,{skip:parseInt(skip), limit: parseInt(limit)}, function (err,docs) {
                        if (err) {
                            reject({ code: 201, message: '获取数据失败，'+ err.message});
                        } else {
                            resolve({ code: 200, count: count, message: '获取成功！',result: docs});
                        }
                    })
                }
            })
        })
    },
    //修改某一条工作量模块清单
    updateTeachWorkload: (reqParam) => {
        return new Promise((resolve, reject) => {
            let data = {},updateData = {};
            if (!reqParam._id) {
                reject({code: 201, message:'修改失败，请刷新重试！'})
            } else {
                data._id = mongoose.Types.ObjectId(reqParam._id);
            }
            reqParam.name && (updateData.name = reqParam.name);
            reqParam.jobID && (updateData.jobID = reqParam.jobID);
            reqParam.station && (updateData.station = reqParam.station);
            reqParam.auditRecord && (updateData.auditRecord = reqParam.auditRecord);
            reqParam.submitTime && (updateData.submitTime = reqParam.submitTime);
            reqParam.workLoad && (updateData.workLoad = reqParam.workLoad);
            TeachWorkload.findByIdAndUpdate(data._id,updateData,{new: false}, function(err, data) {
                if (err) {
                    reject({ code: 500, message:'创建失败，' + err.message})
                } else {
                    resolve({ code: 200, message:'修改成功！'})
                }
            })
        })
    },
    //删除某一条工作量模块清单
    deleteTeachWorkload: (reqParam) => {
        return new Promise((resolve,reject) => {
            let data = {};
            if (!reqParam._id) {
                reject({ code: 201, message:'删除失败，请刷新重试！'});
            } else {
                data._id = mongoose.Types.ObjectId(reqParam._id);
                TeachWorkload.findByIdAndRemove(data, function(err, data) {
                    if (err) {
                        reject({ code: 500, message:'删除失败！' + err.message});
                    } else {
                        resolve({ code: 200,message: '删除成功！'})
                    }
                })
            }
        })
    },
    //获取所有的工作量数据清单
    getAllTeachWorkload: (reqParam) => {
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
            TeachWorkload.countDocuments(data, function (err,count) {
                if (err) {
                    reject({ code: 500, message: '获取数据失败，' + err.message});
                } else {
                    TeachWorkload.find(data, null, {skip: parseInt(skip), limit: parseInt(limit)}, function(err, docs) {
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